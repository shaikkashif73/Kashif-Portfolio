import React from "react";
import "./MyWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";

const MyWork = () => {
  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My Projects</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return (
            <a
              className="mywork-item"
              key={index}
              href={work.w_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={work.w_img} alt={work.w_name} />

              <div className="mywork-info">
                <h2>{work.w_name}</h2>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default MyWork;