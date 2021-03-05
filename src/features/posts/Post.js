import styles from "./Post.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentAlt } from "@fortawesome/free-solid-svg-icons";


export const Post = (props) => {
  const handleClick = () => {
    window.location = props.post.url;
  };
  const getHoursDiff = () => {
    const timeDelta = Math.abs(Date.now() - props.post.utcCreationDate * 1000);
    const hoursDiff = Math.floor(timeDelta / (1000 * 60 * 60));
    return hoursDiff;
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
        <p>{getHoursDiff()} hours ago</p>
      </div>
    </div>
  );
};
