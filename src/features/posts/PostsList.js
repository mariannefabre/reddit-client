import {Post} from './Post';
import styles from './PostsList.module.css';

export function PostsList (props) {

  return (
    <ul className={styles.postsList}>
      {props.posts.map((post) => <Post key={post.id} post={post}/>)}
    </ul>
  )
}