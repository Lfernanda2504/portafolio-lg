
import { Link, Route, Routes } from 'react-router-dom';
import './App.css'
import AboutMe from './PortafolioContainer/AboutMe/AboutMe';
import Contact from './PortafolioContainer/ContactMe/Contact';
import Home from './PortafolioContainer/Home/Home';
import Projects from './PortafolioContainer/Projects/Projects';


function App() {
  return (
    <div >
      <nav className="navbar">
        <div className="navLogo">
          <div className="logo-picture">
          <img className="logo" src="https://res.cloudinary.com/academia/image/upload/v1649171947/1_gdngji.png"/>
          </div>
        </div>

        <div className="navLinks" data-animation="line">
          <ul className="uList">
            <li className="list"><Link to="/" className="link">INICIO</Link></li>
            <li className="list"><Link to="/about-me" className="link" >SOBRE MI </Link></li>
            <li className="list"><Link to="/projects" className="link">PROYECTOS</Link></li>
            <li className="list"><Link to="/contact" className="link">CONTACTO </Link></li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about-me" element={<AboutMe />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
      
    </div>
  );
}

export default App;
