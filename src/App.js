import React from "react";
import logo from "./Reddit_logo.svg";
import { SearchBar } from "./features/searchBar/SearchBar";
import { PostsList } from "./features/posts/PostsList";
import { Categories } from "./features/categories/Categories";
import { Reddit } from "./util/Reddit";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.getResult = this.getResult.bind(this);
  }

  async getResult() {
    const results = await Reddit.getPopularPageData();
    console.log(results);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <SearchBar />
        </header>
        <button onClick={this.getResult} />
        <div>
          <Categories />
        </div>
        <div>
          <PostsList></PostsList>
        </div>
      </div>
    );
  }
}

export default App;
