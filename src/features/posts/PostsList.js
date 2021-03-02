import {Post} from './Post';
import styles from './PostsList.module.css';

export function PostsList () {

  return (
    <div className={styles.postsList}>
    <Post></Post>
    <Post></Post>
    </div>
  )
}