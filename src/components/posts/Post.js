import styles from "./Post.module.css";
import { BiCommentDetail } from "react-icons/bi";
import {BsBoxArrowUpRight} from 'react-icons/bs';

export const Post = (props) => {
  const handleClick = () => {
    window.location = props.post.url;
  };
  const getTimeDiff = () => {
    const timeDelta = Math.abs(Date.now() - props.post.utcCreationDate * 1000);
    if (Math.floor(timeDelta / (1000 * 60 * 60)) > 1) {
      return `${Math.floor(timeDelta / (1000 * 60 * 60))} hours ago`;
    } else if (Math.floor(timeDelta / (1000 * 60 * 60)) === 1) {
      return `${Math.floor(timeDelta / (1000 * 60 * 60))} hour ago`;
    } else if (Math.floor(timeDelta / (1000 * 60 * 60 * 60)) > 1) {
      return `${Math.floor(timeDelta / (1000 * 60 * 60 * 60))} minutes ago`;
    } else {
      return `${Math.floor(
        timeDelta / (1000 * 60 * 60 * 60 * 60)
      )} seconds ago`;
    }
  };
  const isImage = (url) => {
    return /redd/.test(url);
  };
  const shortenUrl = () => {
    return props.post.url.replace(/^(https):\/\/www./, '');
  }

  return (
    <div className={styles.post}>
      <div className={styles.inline}>
        <p className={styles.bold}>{props.post.subreddit}</p>
        <p>Posted by: {props.post.author}</p>
      </div>
      <p className={styles.title}>{props.post.title}</p>
      {props.post.text && <p className={styles.text}>{props.post.text}</p>}
      {props.post.isVideo && (
        <video controls className={styles.video}>
          <source src={props.post.fallbackUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {isImage(props.post.url) ? (
        <img src={props.post.url} className={styles.img} alt="" />
      ) : (<div>
        {isImage(props.post.thumbnail) && <img src={props.post.thumbnail} alt=""/>}
        <p><a className={styles.link} href={props.post.url}>{shortenUrl()}</a></p>
        </div>
      )}

      <div className={styles.inline}>
        <p className={styles.upvotes}>{props.post.ups} ups</p>
        <BiCommentDetail className={styles.icon} />
        <p className={styles.bold}>{props.post.nbComments} comments</p>
        <p>{getTimeDiff()}</p>

        <BsBoxArrowUpRight className={styles.button} onClick={handleClick}/>
      </div>
    </div>
  );
};
