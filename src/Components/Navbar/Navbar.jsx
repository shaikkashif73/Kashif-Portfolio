import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/kashif_logo.png";
import underline from "../../assets/nav_underline.svg";
const Navbar = () => {
  const [menu, setMenu] = useState("about");
  return (
    <div className="navbar">
      <img className="logo" src={logo} alt="" />
      <ul className="nav-menu">
        <li>
          <a href="#about" className="anchor-link">
            <p onClick={() => setMenu("about")}>About</p>
          </a>
          {menu === "about" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <a href="#services" className="anchor-link" offset={50}>
            <p onClick={() => setMenu("skills")}>Skills</p>
          </a>
          {menu === "skills" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <a href="home" className="anchor-link" offset={50}>
            <p onClick={() => setMenu("home")}>Home</p>
          </a>
          {menu === "home" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <a href="work" className="anchor-link" offset={50}>
            <p onClick={() => setMenu("projects")}>Projects</p>
          </a>
          {menu === "projects" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <a href="experience" className="anchor-link" offset={50}>
            <p onClick={() => setMenu("experience")}>Experience</p>
          </a>
          {menu === "experience" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <a href="#contact" className="anchor-link" offset={50}>
            <p onClick={() => setMenu("contact")}>Contact</p>
          </a>
          {menu === "contact" ? <img src={underline} alt="" /> : <></>}
        </li>
      </ul>

      <div className="nav-connect">
        <a href="#contact" className="anchor-link" offset={50}>
          Connect With Me
        </a>
      </div>
    </div>
  );
};

export default Navbar;
