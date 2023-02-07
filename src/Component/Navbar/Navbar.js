import "./Navbar.css";
import React from "react";
import logo from "../images/logo.svg";

const Navbar = () => {
  return (
    <div className="nav">
      <img className="logo" src={logo} alt="fylo logo"></img>
      <div className="nav-item">
        <ul className="nav-items">
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Team</a>
          </li>
          <li>
            <a href="#">Sign In</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
