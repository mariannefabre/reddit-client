import styles from "./Post.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentAlt } from "@fortawesome/free-solid-svg-icons";


export const Post = (props) => {
  
  const handleClick = () => {
    window.location = props.post.url;
  };
  const getTimeDiff = () => {
    const timeDelta = Math.abs(Date.now() - props.post.utcCreationDate * 1000);
    if(Math.floor(timeDelta / (1000 * 60 * 60)) > 1){
      return `${Math.floor(timeDelta / (1000 * 60 * 60))} hours ago`;
    } else if(Math.floor(timeDelta / (1000 * 60 * 60))===1){
      return `${Math.floor(timeDelta / (1000 * 60 * 60))} hour ago`;
    }else if (Math.floor(timeDelta / (1000 * 60 * 60 * 60)) > 1){
      return `${Math.floor(timeDelta / (1000 * 60 * 60 * 60))} minutes ago`;
    }else {
      return `${Math.floor(timeDelta / (1000 * 60 * 60 * 60 * 60))} seconds ago`;
    }
    
  };

  return (

    <div className={styles.post} onClick={handleClick}>
      <div className={styles.inline}>
        <p className={styles.bold}>{props.post.subreddit}</p>
        <p>Posted by: {props.post.author}</p>
      </div>
      <p className={styles.title}>{props.post.title}</p>
      {props.post.thumbnail ? (
        <img
          src={props.post.thumbnail}
          className={styles.thumbnail}
          alt="thumbnail"
        />
      ) : (
        <p>no picture</p>
      )}

      <div className={styles.inline}>
        <p className={styles.upvotes}>{props.post.ups} ups</p>
        <FontAwesomeIcon style={{ margin: "auto" }} icon={faCommentAlt} />
        <p className={styles.bold}>{props.post.nbComments} comments</p>
        <p>{getTimeDiff()}</p>
      </div>
    </div>
  );
};
