import React from "react";
import logo from "./Reddit_logo.svg";
import { SearchBar } from "./features/searchBar/SearchBar";
import { PostsList } from "./features/posts/PostsList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <SearchBar />
      </header>
      <div>
        <PostsList></PostsList>
      </div>
    </div>
  );
}

export default App;
