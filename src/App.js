import React, { useEffect, useState } from "react";
import logo from "./Reddit_logo.svg";
import { SearchBar } from "./features/searchBar/SearchBar";
import { PostsList } from "./features/posts/PostsList";
import { SideBar } from "./features/sideBar/SideBar";
import { Reddit } from "./util/Reddit";
import "./App.css";

const App = () => {
  const [posts, setPosts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const results = await Reddit.getPopularPosts();
      setPosts(results);
      setIsLoading(false);
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
          <h2 className="loading">Loading</h2>
        ) : (
          <PostsList posts={posts} />
        )}
      </section>
    </div>
  );
};

export default App;
