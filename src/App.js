import React, {useState } from "react";
import logo from "./Reddit_logo.svg";
import { SearchBar } from "./components/searchBar/SearchBar";
import { SideBar } from "./components/sideBar/SideBar";
import {ScrollComponent} from './components/ScrollComponent';
import "./App.css";
/* import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons"; */

const App = () => {

  const [currentCategoryId, setCurrentCategoryId] = useState(0);

  const handleClick = (id) => {
    setCurrentCategoryId(id);
  };


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Reddit logo" />
        <SearchBar />
      </header>
      <section className="container">
        <SideBar currentCategoryId={currentCategoryId} onClick={handleClick} />
        <ScrollComponent currentCategoryId={currentCategoryId} />
      </section>
    </div>
  );
};

export default App;