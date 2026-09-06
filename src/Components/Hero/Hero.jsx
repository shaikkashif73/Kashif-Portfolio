import React from "react";
import profile_img from "../../assets/profile_circular.png";
import resume from "../../assets/Shaik_Kashif_Resume.pdf";
import "./Hero.css";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img className="profile-img" src={profile_img} alt="Shaik Kashif" />

      <h1>
        <span>I'm Shaik Kashif,</span> a Full Stack Developer
      </h1>

      <p>
        I’m a Full Stack Developer with 2 years of experience building
        responsive and user-friendly web applications. I work across both
        frontend and backend development, building interfaces, integrating APIs,
        developing server-side functionality, and working with databases to
        create complete web solutions. I enjoy turning ideas into clean,
        functional, and scalable applications.
      </p>

      <div className="hero-action">
        <div className="hero-connect">
          <a href="#contact" className="anchor-link">
            Connect with me
          </a>
        </div>

        <a
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
          className="hero-resume"
        >
          My Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;
