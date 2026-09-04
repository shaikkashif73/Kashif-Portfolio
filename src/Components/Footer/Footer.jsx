import React from "react";
import "./Footer.css";
import logo from "../../assets/kashif_logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <a href="#home">
            <img className="logo" src={logo} alt="Shaik Kashif" />
          </a>

          <p>
            I'm a Frontend Developer based in Hyderabad, working mainly with
            React.js and modern web technologies.
          </p>
        </div>

        <div className="footer-top-right">
          <a href="mailto:kashifcodes10@gmail.com" className="footer-contact">
            Contact Me
          </a>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <p className="footer-bottom-left">
          © 2026 Shaik Kashif. All rights reserved.
        </p>

        <div className="footer-bottom-right">
          <a
            href="https://github.com/shaikkashif73"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/shaik-kashif-dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a href="#contact">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
