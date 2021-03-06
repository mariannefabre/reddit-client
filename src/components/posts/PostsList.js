/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Reddit } from "../../util/Reddit";
import { ImSpinner2 } from "react-icons/im";
import { Post } from "./Post";
import styles from "./Post.module.css";
import { SkeletonPost } from "../../skeleton/SkeletonPost";

export const PostsList = (props) => {
  const [posts, setPosts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isBottom, setIsBottom] = useState(false);
  const [nextPage, setNextPage] = useState("");
  let loadingRef;


  async function fetchData(isNewCategory) {
    const postsListing = await Reddit.getPostsList(props.currentPath, nextPage);
    console.log(isNewCategory);
    if (isNewCategory) {
      setPosts(postsListing.posts);
      setIsLoading(false);
    } else {
      const updatedList = posts.concat(postsListing.posts);
      setPosts(updatedList);
      setIsBottom(false);
    }
    setNextPage(postsListing.nextList);
  }

  function handleObserver(entities, observer) {
    if (entities[0].isIntersecting) {
      setIsBottom(true);
    }
  }

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, options);
    observer.observe(loadingRef);
  }, []);

  useEffect(() => {
    if (isBottom) fetchData(false);
  }, [isBottom]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoading(true);
    fetchData(true);
  }, [props.currentPath]);

  

  return (
    <div className={styles.container}>
      <ul className={styles.postsList}>
        {isLoading
          ? [1, 2, 3, 4].map((skeletonPost) => (
              <SkeletonPost key={Math.random()} />
            ))
          : posts.map((post) => <Post key={Math.random()} post={post} />)}
      </ul>
      <div className={styles.wrapper} ref={(node) => (loadingRef = node)}>
        <ImSpinner2 className={styles.loading} />
      </div>
    </div>
  );
};
