import styles from "./Post.module.css";

export function Post() {
  return (
    <div className={styles.post}>
      <span>
        <p>Reddit Community</p>
        <p>Username</p>
      </span>
      <h2>Post Title</h2>
      <p>Content (img or text)</p>
      <span>
        <p>Number of upvotes</p>
        <p>Number of comments</p>
        <p>Date</p>
      </span>
    </div>
  );
}
