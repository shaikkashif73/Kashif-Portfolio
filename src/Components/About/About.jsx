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
              I’m a Full Stack Developer with 2 years of professional
              experience, working across frontend and backend development. I
              build responsive user interfaces, reusable components, REST APIs,
              server-side functionality, and database-driven applications.
            </p>

            <p>
              I work with React.js, Angular, JavaScript, Node.js, Express.js,
              MongoDB, and REST APIs. I enjoy building complete web
              applications, solving development issues, and turning ideas into
              clean and functional products.
            </p>
          </div>

          <div className="about-skills">
            <div className="about-skill">
              <p>React.js</p>
              <hr style={{ width: "65%" }} />
            </div>

            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "85%" }} />
            </div>

            <div className="about-skill">
              <p>Angular</p>
              <hr style={{ width: "65%" }} />
            </div>

            <div className="about-skill">
              <p>Node.js</p>
              <hr style={{ width: "60%" }} />
            </div>

            <div className="about-skill">
              <p>MongoDB</p>
              <hr style={{ width: "50%" }} />
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
          <h1>FULL STACK</h1>
          <p>WEB DEVELOPMENT</p>
        </div>
      </div>
    </div>
  );
};

export default About;
