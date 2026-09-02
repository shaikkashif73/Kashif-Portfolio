import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_image from "../../assets/about_profile.svg";

const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="about-sections">
        <div className="about_left">
          <img src={profile_image} alt="Kashif" />
        </div>

        <div className="about-right">
          <div className="about-para">
            <p>
              I am a Full Stack MERN Developer with 2 years of professional
              experience, specializing in React.js and frontend development.
              I have worked on building responsive user interfaces, reusable
              React components, and modern web applications.
            </p>

            <p>
              Along with frontend development, I have hands-on experience with
              Node.js, Express.js, MongoDB, REST APIs, and Redux. I enjoy
              building complete web applications and continuously improving my
              development skills through real-world projects.
            </p>
          </div>

          <div className="about-skills">
            <div className="about-skill">
              <p>React.js</p>
              <hr style={{ width: "90%" }} />
            </div>

            <div className="about-skill">
              <p>Angular.js</p>
              <hr style={{ width: "85%" }} />
            </div>

            <div className="about-skill">
              <p>Node.js</p>
              <hr style={{ width: "75%" }} />
            </div>

            <div className="about-skill">
              <p>MongoDB</p>
              <hr style={{ width: "70%" }} />
            </div>
          </div>
        </div>
      </div>

      <div className="about-achievements">
        <div className="about-achievement">
          <h1>2+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>

        <hr />

        <div className="about-achievement">
          <h1>3+</h1>
          <p>MAJOR PROJECTS</p>
        </div>

        <hr />

        <div className="about-achievement">
          <h1>MERN</h1>
          <p>FULL STACK DEVELOPMENT</p>
        </div>
      </div>
    </div>
  );
};

export default About;