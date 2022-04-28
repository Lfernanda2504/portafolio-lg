import React from 'react'
import { listPortafolio } from '../../assets/data'
import './projects.css'

const Projects = () => {
  return (
    <div className="container">
      <h6 className="title-about text-center">Proyectos</h6>
      {listPortafolio.map((list, index) => (
        <div className="slide">
          <div className="container-slide">
            <div className="slides-wrapper">
              <div className="img-container">
                <img src={list.imagen.vista1} />
              </div>
              <div className="img-container">
                <img src={list.imagen.vista2} alt="img-slide2" />
              </div>
              <div className="img-container">
                <img src={list.imagen.vista3} alt="img-projects" />
              </div>
            </div>
            <div className="slider">
              <div className="selected"></div>
              <button className="slider-button"></button>
              <button className="slider-button"></button>
              <button className="slider-button"></button>
            </div>
          </div>

          <div className="content-project container">
            <div className="text-project">
              <h6 className="title-about">{list.nombre}</h6>
              <p className="text-description">{list.descripcion}</p>
              <p className="text-stack">{list.stack}</p>
              <a href={list.github} className="link" target="_blank" rel="noreferrer">
                <button className="btn primary-btn">GitHub</button>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Projects