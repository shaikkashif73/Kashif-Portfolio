import React from "react";
import profile_img from "../../assets/profile_circular.png";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <img className="profile-img" src={profile_img} alt="Shaik Kashif" />

      <h1>
        <span>I'm Shaik Kashif,</span> a Full Stack MERN Developer
      </h1>

      <p>
        Full Stack MERN Developer with 2 years of professional experience
        building responsive, scalable, and user-focused web applications.
        Skilled in React.js, JavaScript, Redux, Node.js, Express.js, MongoDB,
        and REST APIs, with a strong focus on clean code, reusable components,
        and delivering reliable solutions.
      </p>

      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
