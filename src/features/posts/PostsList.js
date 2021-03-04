import { Post } from "./Post";
import styles from "./Post.module.css";

export const PostsList = (props) => {
  return (
    <ul className={styles.postsList}>
      {props.posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </ul>
  );
};
