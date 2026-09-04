import React, { useRef, useState } from "react";
import "./Navbar.css";

import logo from "../../assets/kashif_logo.png";
import underline from "../../assets/nav_underline.svg";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  const handleMenuClick = (section) => {
    setMenu(section);
    closeMenu();
  };

  return (
    <div className="navbar">
      <a href="#home">
        <img className="logo" src={logo} alt="Shaik Kashif" />
      </a>

      <img
        src={menu_open}
        onClick={openMenu}
        alt="Open menu"
        className="nav-mob-open"
      />

      <ul ref={menuRef} className="nav-menu">
        <img
          src={menu_close}
          onClick={closeMenu}
          className="nav-mob-close"
          alt="Close menu"
        />

        <li>
          <a
            href="#home"
            className="anchor-link"
            onClick={() => handleMenuClick("home")}
          >
            <p>Home</p>
          </a>
          {menu === "home" && <img src={underline} alt="" />}
        </li>

        <li>
          <a
            href="#about"
            className="anchor-link"
            onClick={() => handleMenuClick("about")}
          >
            <p>About</p>
          </a>
          {menu === "about" && <img src={underline} alt="" />}
        </li>

        <li>
          <a
            href="#skills"
            className="anchor-link"
            onClick={() => handleMenuClick("skills")}
          >
            <p>Skills</p>
          </a>
          {menu === "skills" && <img src={underline} alt="" />}
        </li>

        <li>
          <a
            href="#work"
            className="anchor-link"
            onClick={() => handleMenuClick("projects")}
          >
            <p>Projects</p>
          </a>
          {menu === "projects" && <img src={underline} alt="" />}
        </li>

        <li>
          <a
            href="#experience"
            className="anchor-link"
            onClick={() => handleMenuClick("experience")}
          >
            <p>Experience</p>
          </a>
          {menu === "experience" && <img src={underline} alt="" />}
        </li>

        <li>
          <a
            href="#contact"
            className="anchor-link"
            onClick={() => handleMenuClick("contact")}
          >
            <p>Contact</p>
          </a>
          {menu === "contact" && <img src={underline} alt="" />}
        </li>
      </ul>

      <div className="nav-connect">
        <a href="#contact" className="anchor-link">
          Connect With Me
        </a>
      </div>
    </div>
  );
};

export default Navbar;
