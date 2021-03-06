import React, { useEffect, useState } from "react";
import logo from "./Reddit_logo.svg";
import { SearchBar } from "./components/searchBar/SearchBar";
import { PostsList } from "./components/posts/PostsList";
import { SideBar } from "./components/sideBar/SideBar";
import { Reddit } from "./util/Reddit";
import "./App.css";
/* import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons"; */

const App = () => {
  const [posts, setPosts] = useState(null);
  const [currentCategoryId, setCurrentCategoryId] = useState(0);
  const [isContentLoading, setIsContentLoading] = useState(true);

  async function fetchData() {
    setIsContentLoading(true);
    const results = await Reddit.getPosts(
      Reddit.Categories[currentCategoryId].urlToFetch
    );
    setPosts(results);
    setIsContentLoading(false);
  }

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCategoryId]);

  const handleClick = (id) => {
    setCurrentCategoryId(id);
  };

  async function handleChange(searchTerm){
    
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Reddit logo" />
        <SearchBar onChange={handleChange}/>
      </header>
      <section className="container">
        <SideBar currentCategoryId={currentCategoryId} onClick={handleClick} />
        <PostsList isLoading={isContentLoading} posts={posts} />
      </section>
    </div>
  );
};

export default App;