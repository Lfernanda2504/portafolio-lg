import React from "react";
import Typical from "react-typical";
import './profile.css' 
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
export default function Profile() {
  return (
    <div className="profile-container text-center">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/luii.garciia1" target="_blank">
                <FaFacebookSquare />
              </a>
              <a href="https://www.instagram.com/lfgarciaoc/" target="_blank">
                <FaInstagram />
              </a>
              <a href="https://twitter.com/LuisaFe48692047" target="_blank">
                <FaTwitter />
              </a>
              <a href="https://www.linkedin.com/in/lfgarciaoc/" target="_blank">
                <FaLinkedin />
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              Hola, Soy <span className="name-text">LFGarciaOc</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Desarrolladora Front-end ",
                    2000,
                    "JavaScript, CSS, HTML",
                    2000,
                    "Reactjs",
                    2000,
                    "Redux",
                    2000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                
                 Desarrolladora web Front-End con énfasis
                en ReactJs | Design Thinking | Metodologías agiles |
                Responsabilidad y compromiso.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">Contactame</button>
            <a href="HV_LuisaGarciaO.pdf" download="hv_LuisaGarcia.pdf">
              <button className="btn highlighted-btn">Hoja de vida</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
