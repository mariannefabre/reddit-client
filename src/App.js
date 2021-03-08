import React, {useState } from "react";
import logo from "./Reddit_logo.svg";
import { SearchBar } from "./components/searchBar/SearchBar";
import { SideNav } from "./components/sideNav/SideNav";
import {PostsList} from './components/posts/PostsList';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./App.css";
import Menu from './components/menu/Menu';


const App = () => {
  const [currentCategoryId, setCurrentCategoryId] = useState(0);

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

  const handleClick = (id) => {
    setCurrentCategoryId(id);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Reddit logo" />
        <SearchBar />
        <Router>
          <Menu />
          <Switch>
            <Route path='/'/>
          </Switch>
        </Router>
        {/* <SideBar currentCategoryId={currentCategoryId} onClick={handleClick}>
          <Link to="#" className="menu-bars">
            <FaBars/>
          </Link>
        </SideBar> */}
      </header>
      <section className="container">
         <SideNav currentCategoryId={currentCategoryId} onClick={handleClick} /> 
        <PostsList currentCategoryId={currentCategoryId} />
      </section>
    </div>
  );
};

export default App;