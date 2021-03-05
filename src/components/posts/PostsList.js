import { Post } from "./Post";
import styles from "./Post.module.css";
import { SkeletonPost } from "../../skeleton/SkeletonPost";

export const PostsList = (props) => {
  return (
    <ul className={styles.postsList}>
      {props.isLoading
        ? [1, 2, 3, 4].map((skeletonPost) => <SkeletonPost key={Math.random()}/>)
        : props.posts.map((post) => <Post key={post.id} post={post} />)}
    </ul>
  );
};
