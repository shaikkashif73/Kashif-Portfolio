import React from "react";
import "./About.css";

import theme_pattern from "../../assets/theme_pattern.svg";
import profile_image from "../../assets/finalpicturekashif.png";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="about-sections">
        <div className="about-left">
          <img src={profile_image} alt="Shaik Kashif" />
        </div>

        <div className="about-right">
          <div className="about-para">
            <p>
              I’m a Frontend Developer with 2 years of experience, working
              mainly with React.js and modern web technologies. My work has
              involved building responsive user interfaces, developing reusable
              components, and turning designs into functional web pages.
            </p>

            <p>
              I also work with Node.js, Express.js, MongoDB and REST APIs, which
              allows me to understand and contribute to the backend side of
              applications as well. I enjoy working on real projects, solving
              development issues, and improving my skills through hands-on
              experience.
            </p>
          </div>

          <div className="about-skills">
            <div className="about-skill">
              <p>React.js</p>
              <hr style={{ width: "90%" }} />
            </div>

            <div className="about-skill">
              <p>JavaScript</p>
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
          <p>PROJECTS</p>
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
