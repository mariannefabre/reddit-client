import styles from "./Post.module.css";

export function Post(props) {
  return (
    <div className={styles.post}>
      <div className={styles.inline}>
        <p className={styles.bold}>{props.post.subreddit}</p>
        <p>{props.post.author}</p>
      </div>
      <h2>{props.post.title}</h2>
      {props.post.thumbnail ? <img src={props.post.thumbnail} alt='thumbnail'/> : <p>no picture</p>}

      <div className={styles.inline}>
        <p className={styles.upvotes}>{props.post.ups}</p>
        <p className={styles.bold}>{props.post.nbComments}</p>
        <p>{props.post.date}</p>
      </div>
    </div>
  );
}
