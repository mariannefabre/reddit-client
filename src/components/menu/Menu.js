import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import {Reddit} from "../../util/Reddit";
import './Menu.css';

const Menu = (props) => {
  const [sideBar, setSideBar] = useState(false);

  const showSideBar = () => setSideBar(!sideBar);

  return (
    <>
      <div className="menu">
        <Link to="#" className="menu-bars">
          <FaBars onClick={showSideBar}/>
        </Link>
      </div>
      <nav className={sideBar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items">
          <li className="navbar-toggle"> 
            <Link to="#" className="menu-bars">
              <AiOutlineClose onClick={showSideBar}/>
            </Link>
          </li>
          {Reddit.Categories.map((category) => (
          <li
          className="nav-text"
/*             className={getLinkClasses(category.id)}
            onClick={() => handleClick(category.id)} */
/*              */
            key={category.id}
          >
            <Link to={category.path}>
            {category.icon}
            <span>{category.name}</span>
            </Link>

          </li>
        ))}

        </ul>
      </nav>
    </>
  );
};

export default Menu;
