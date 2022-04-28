import React from 'react'
import Profile from './Profile/Profile'
import Footer from './Footer/Footer'
import './home.css'
import AboutMe from '../AboutMe/AboutMe'
import Contact from '../ContactMe/Contact'
import Projects from '../Projects/Projects'
import { Link } from 'react-router-dom'


export default function Home() {
  return (
  <>
    <div className="home-container">
        <Profile />
        <Footer />
    </div>
     <AboutMe />
     <Projects />
     <Contact />
    </>
  )
}
