import React from "react";
import "./Navbar.css";
import logo from "../../assets/kashif_logo.png";
const Navbar = () => {
  return (
    <div className="navbar">
      <img className="logo" src={logo} alt="" />
      <ul className="nav-menu">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Experience</li>
        <li>Contact</li>
      </ul>

      <div className="nav-connect">Connect With Me</div>
    </div>
  );
};

export default Navbar;
