import React from "react";
import logo from "./Reddit_logo.svg";
import { SearchBar } from "./components/searchBar/SearchBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Menu from "./components/menu/Menu";
import Home from "./pages/Home";

const App = () => {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="Reddit logo" />
          <SearchBar />
          <Menu />
          {/* <SideBar currentCategoryId={currentCategoryId} onClick={handleClick}>
          <Link to="#" className="menu-bars">
            <FaBars/>
          </Link>
        </SideBar> */}
        </header>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
