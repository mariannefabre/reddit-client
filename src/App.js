import React, { useEffect, useState } from "react";
import logo from "./Reddit_logo.svg";
import { SearchBar } from "./features/searchBar/SearchBar";
import { PostsList } from "./features/posts/PostsList";
import { SideBar } from "./features/sideBar/SideBar";
import { Reddit } from "./util/Reddit";
import "./App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';


const App = () => {
  const [posts, setPosts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const results = await Reddit.getPopularPosts();
      setPosts(results);
      setIsLoading(false);
      console.log(results);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Reddit logo" />
        <SearchBar />
      </header>
      <section className="container">
        <SideBar />
        {isLoading ? (
          <FontAwesomeIcon className="loading" icon={faSpinner} spin />
        ) : (
          <PostsList posts={posts} />
        )}
      </section>
    </div>
  );
};

export default App;
