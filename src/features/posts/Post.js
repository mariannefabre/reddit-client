import styles from "./Post.module.css";

export function Post() {
  return (
    <div className={styles.post}>
      <div className={styles.inline}>
        <p>Reddit Community</p>
        <p>Username</p>
      </div>
      <h2>Post Title</h2>
      <p>Content (img or text)</p>

      <div className={styles.inline}>
        <p>Number of upvotes</p>
        <p>Number of comments</p>
        <p>Date</p>
      </div>
    </div>
  );
}
