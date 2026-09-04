import React from "react";
import "./Experience.css";
import theme_pattern from "../../assets/theme_pattern.svg";

const Experience = () => {
  return (
    <div id="experience" className="experience">
      <div className="experience-title">
        <h1>My Experience</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="experience-container">
        <div className="experience-card">
          <div className="experience-header">
            <div>
              <h2>Frontend Developer</h2>
              <h3>Inspiration Innovation</h3>
            </div>

            <p>July 2025 - Present</p>
          </div>

          <ul>
            <li>Developing responsive web interfaces using React.js.</li>
            <li>Building reusable components and working with React Hooks.</li>
            <li>Integrating REST APIs with frontend applications.</li>
            <li>Fixing UI issues, debugging applications and improving performance.</li>
            <li>Working with Git and GitHub as part of the development workflow.</li>
          </ul>
        </div>

        <div className="experience-card">
          <div className="experience-header">
            <div>
              <h2>ReactJS Intern</h2>
              <h3>Inspiration Innovation</h3>
            </div>

            <p>July 2024 - June 2025</p>
          </div>

          <ul>
            <li>Worked on React.js modules and responsive web pages.</li>
            <li>Converted UI designs into functional and responsive interfaces.</li>
            <li>Worked with API integration and component-based development.</li>
            <li>Participated in testing, debugging and fixing application issues.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;