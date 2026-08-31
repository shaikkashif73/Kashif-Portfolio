import React from "react";
import profile_img from "../../assets/profile_circular.png";
import "./Hero.css";
const Hero = () => {
  return (
    <div className="hero">
      <img className="profile-img" src={profile_img} alt="" />
      <h1>
        <span>I'm Shaik Kashif,</span> frontend developer based in HYD.
      </h1>
      <p>
        I am a frontend developer from Hyderabad, India with 2 years of
        experience in web development.
      </p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My resume </div>
      </div>
    </div>
  );
};

export default Hero;
