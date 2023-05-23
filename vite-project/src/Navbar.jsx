import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <nav className="siteTitle">
        <a className="home" href="#profile">
          Haluethaichanok Junlongsawaitkul
        </a>
      </nav>
      <nav className="rightSide">
        <ul className="menu">
          <li className="menuItem">
            <a href="#profile">About</a>
          </li>
          <li className="menuItem">
            <a href="#projects">Projects</a>
          </li>
          <li className="menuItem">
            <a href="#experience">Experience</a>
          </li>
          <li className="menuItem">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
