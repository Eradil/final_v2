import React from "react";

import "./About.css";

const About = () => {
  return (
    <div className="main_about">
      <div className="about_component">
        <div className="about_txt">
          <div>
            <h1 className="about_title">
              Turn your dream into the adventure of a lifetime
            </h1>
            <p className="about_subtitle">
              KyrgyzBuy believes you deserve a memorable travel experience
              filled with fun and adventure.
            </p>
          </div>

          <button className="about_btn">contact a specialist</button>
        </div>
      </div>
    </div>
  );
};

export default About;
