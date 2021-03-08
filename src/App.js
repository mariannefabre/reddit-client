import React, {useState } from "react";
import logo from "./Reddit_logo.svg";
import { SearchBar } from "./components/searchBar/SearchBar";
import { SideBar } from "./components/sideBar/SideBar";
import {PostsList} from './components/posts/PostsList';
import "./App.css";
/* import {FaBars} from "react-icons/fa";
import {Link} from "react-router-dom"; */


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
        {/* <SideBar currentCategoryId={currentCategoryId} onClick={handleClick}>
          <Link to="#" className="menu-bars">
            <FaBars/>
          </Link>
        </SideBar> */}
      </header>
      <section className="container">
         <SideBar currentCategoryId={currentCategoryId} onClick={handleClick} /> 
        <PostsList currentCategoryId={currentCategoryId} />
      </section>
    </div>
  );
};

export default App;