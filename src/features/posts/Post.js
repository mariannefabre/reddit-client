import styles from "./Post.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons'

export const Post = (props) => {

  const handleClick = () => {
    window.location = props.post.url;
  }
const convertEpochDate = () =>{
  var date = new Date(props.post.date*1000);
  return date.toUTCString()
}

  return (
    <div className={styles.post} onClick={handleClick}>
      <div className={styles.inline}>
        <p className={styles.bold}>{props.post.subreddit}</p>
        <p>{props.post.author}</p>
      </div>
      <h3>{props.post.title}</h3>
      {props.post.thumbnail ? <img src={props.post.thumbnail} className={styles.thumbnail} alt='thumbnail'/> : <p>no picture</p>}

      <div className={styles.inline}>
        <p className={styles.upvotes}>{props.post.ups} ups</p>
        <FontAwesomeIcon style={{margin:'auto'}} icon={faCommentAlt} />
        <p className={styles.bold}>{props.post.nbComments}comments</p>
        <p>{convertEpochDate()}</p>
      </div>
    </div>
  );
}
