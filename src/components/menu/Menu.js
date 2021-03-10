import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { categories } from "../../util/Reddit";
import "./Menu.css";

const Menu = () => {
  const [sideBar, setSideBar] = useState(false);

  const showSideBar = () => setSideBar(!sideBar);
  console.log("menu rendered");
  return (
    <>
      <div className="menu">
        <FaBars className="menu-bars" onClick={showSideBar} />
      </div>
      <nav className={sideBar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSideBar}>
          <li className="navbar-toggle">
            <AiOutlineClose className="menu-bars" />
          </li>
          {categories.map((category) => (
            <li className="nav-text" key={category.id}>
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
