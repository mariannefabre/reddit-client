import React, { useState, useEffect } from "react";
import { Reddit } from "../../util/Reddit";
import { PostsList } from "../posts/PostsList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import styles from "./ScrollComponent.module.css";

export const ScrollComponent = (props) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isBottom, setIsBottom] = useState(false);
  const [nextPage, setNextPage] = useState("");
  let loadingRef;

  async function fetchData(url) {
    setIsLoading(true);
    const postsListing = await Reddit.getPostsList(url);
    console.log(postsListing);
    setPosts(postsListing.posts);
    setNextPage(postsListing.nextList);
    setIsLoading(false);
  }
  async function fetchNewData(url) {
    console.log(url);
    const postsListing = await Reddit.getPostsList(url);
    console.log(postsListing);
    const updatedList = posts.concat(postsListing.posts);
    setPosts(updatedList);
    setNextPage(postsListing.nextList);
    setIsBottom(false);
  }

  function handleObserver(entities, observer) {
    entities[0].isIntersecting
      ? console.log("is intersecting")
      : console.log("nothing");
    if (entities[0].isIntersecting) {
      setIsBottom(true);
    }
  }

  useEffect(() => {
    if (isBottom && posts.length > 1) {
      const newUrl =
        Reddit.Categories[props.currentCategoryId].urlToFetch + "?" + nextPage;
      fetchNewData(newUrl);
    }
  }, [isBottom]);

  useEffect(() => {
    fetchData(Reddit.Categories[props.currentCategoryId].urlToFetch);
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };
    const observer = new IntersectionObserver(handleObserver, options);
    observer.observe(loadingRef);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.currentCategoryId]);

  return (
    <div className={styles.wrapper}>
      <PostsList isLoading={isLoading} posts={posts} />
      <div ref={(node) => (loadingRef = node)}>
        <FontAwesomeIcon className={styles.loading} icon={faSpinner} spin />
      </div>
    </div>
  );
};