import React from "react";
import { IconContext } from "react-icons";
import { FaReact, FaCss3 } from "react-icons/fa"
import { SiJavascript, SiRedux, SiBootstrap, SiFirebase } from "react-icons/si"

import "./aboutMe.css";

export default function AboutMe() {
  return (
    <>
      <div className="about-container">
        <div className="title-about">
          <span>Sobre Mi</span>
          <hr />
        </div>
        <div className="about-wrapper">
          <img src="https://res.cloudinary.com/academia/image/upload/v1650693626/vectorpaint_2_kbut3u.svg" alt="reactjs-woman" className="image-thumbnail" />
          <div className="about-name">

            <p className="about-description">Mi Nombre es Luisa Fernanda Garcia, tecnología en análisis y desarrollo de sistema de información,  soy respetuosa, me comunico de forma asertiva, paciente, también me gusta trabajar en equipo, disfruto de diseñar y desarrollar aplicaciones web.
              <br/><br/>Me encanta pintar, dibujar, la naturaleza, caminar, respirar aire puro, compartir con mis seres queridos y viajar.
              Enfocada en crecer integralmente.</p>
            <a href="hv_LuisaGarcia2022.pdf" download="hv_LuisaGarcia.pdf">
              <button className="btn highlighted-btn">Hoja de vida</button>
            </a>
            <div className="skills text-center">
              <IconContext.Provider value={{ className: "icon-about" }}>
                <FaReact size={70} />
                <FaCss3 size={70} />
                <SiJavascript size={70} />
                <SiBootstrap size={70} />
                <SiRedux size={70} />
                <SiFirebase size={70} />
              </IconContext.Provider>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
