import React from "react";
import {IconContext} from "react-icons";
import {FaReact, FaCss3 } from "react-icons/fa"
import {SiJavascript, SiRedux, SiBootstrap, SiFirebase } from "react-icons/si"

import "./aboutMe.css";

export default function AboutMe() {
  return (
    <>
      <div className="about-container">
        <div className="title-about">
          <span>Sobre Mi</span>
          <hr />
        </div>
      </div>
      <div className="about-line">
        <div className="separator-about">
          <div className="skills">
            <IconContext.Provider value={{  className: "icon-about" }}>
              <FaReact size={70} />
              <FaCss3 size={70} />
              <SiJavascript size={70}  />
              <SiBootstrap size={70}  />
              <SiRedux size={70}  />
              <SiFirebase size={70} />
            </IconContext.Provider>
            
            lorem ipsum dolor sit amet, consectetur adip
          </div>
        </div>
      </div>
    </>
  );
}
