import React from 'react'
import Profile from './Profile/Profile'
import Footer from './Footer/Footer'
import './home.css'
import AboutMe from '../AboutMe/AboutMe'
import Contact from '../ContactMe/Contact'

export default function Home() {
  return (
  <>
    <div className="home-container">
      <nav className="navbar">
        <div className="navLogo">
          <div className="logo-picture">
          <img className="logo" src="https://res.cloudinary.com/academia/image/upload/v1649171947/1_gdngji.png"/>
          </div>
        </div>

        <div className="navLinks">
          <ul className="uList">
            <li className="list"><a className="link" href="#aboutImg">INICIO</a></li>
            <li className="list"><a className="link" href="#aboutImg">SOBRE MI</a></li>
            <li className="list"><a className="link" href="#projects">PROYECTOS</a></li>
            <li className="list"><a className="link" href="#contactImg">CONTACTO</a></li>
          </ul>
        </div>
      </nav>
        <Profile />
        <Footer />
    </div>
     <AboutMe />
     <Contact />
    </>
  )
}
