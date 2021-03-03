import React from "react";
import logo from "./Reddit_logo.svg";
import { SearchBar } from "./features/searchBar/SearchBar";
import { PostsList } from "./features/posts/PostsList";
import { SideBar } from "./features/sideBar/SideBar";
import { Reddit } from "./util/Reddit";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  state = {
    posts: null,
    dataIsReturned: false,
  };

  async componentDidMount() {
    const results = await Reddit.getPopularPageData();
    console.log(results);
    this.setState({ posts: results, dataIsReturned: true });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <SearchBar />
          </header>
          <div className="container">
            <SideBar />
            <Route path="...." component={PostsList} />

            {this.state.dataIsReturned ? (
              <PostsList posts={this.state.posts} />
            ) : (
              <p>Loading</p>
            )}
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
