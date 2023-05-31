import React from "react";
import { useState } from "react";
import "./Navbar.css";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="navbar">
      <nav className="toggleNav">
        <button className="toggleBtn" onClick={toggleMenu}>
          {/* <img src="./home_icon.PNG" className=" bgBtn"/> */}
        </button>
        {isOpen && (
          <nav className="tNav">
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
        )}
      </nav>
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
