import React from 'react'
import emailjs from '@emailjs/browser';
import './contact.css'
import {
    FaFacebookSquare,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";



const Contact = () => {
  
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_cn375mq', 'template_ifi0kb9', e.target, 'EQz3khMMxrzaBoMq0')
            .then(response => console.log(response))
            .catch(error => console.log(error))
            e.target.reset();
    }

    return (
        <div>
            <section className="contact">
                <div className="cont container">
                    <div className="contact-text">
                        <p className="title-about">Contacto</p>
                        <h6>Email</h6>
                        <p className="mail">luizafernandagarcia@gmail.com</p>
                        <h6>Ubicación</h6>
                        <p className="address">
                            Pereira-Risaralda
                        </p>
                    </div>
                    <div className="contact-form">
                        <form onSubmit={sendEmail}>
                            <label>Nombre</label>
                            <input type="text" name="name" id="name" placeholder="Ingresa nombre"
                                required />
                            <label >Email</label>
                            <input type="email" name="email" id="email" placeholder="Ingresa email"
                                required />
                            <label >Mensaje</label>
                            <textarea name="message" id="message" cols="30" rows="5" placeholder="Ingresa mensaje"
                                required></textarea>
                            <button className="btn highlighted-btn" type="submit" value="submit">Enviar</button>
                        </form>
                    </div>
                </div>
            </section>
            <section className="info-last">
                <div className="svg-wave" style={{ height: '150px', overflow: 'hidden' }}><svg viewBox="0 0 500 150" preserveAspectRatio="none"
                    style={{ height: '100%', width: '100%' }}>
                    <path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
                        style={{ stroke: 'none', fill: '#1f2235' }}></path>
                </svg>
                </div>
            </section>
            <footer className="content-end">
                <div className="footer-icon text-center">
                    <a href="https://www.facebook.com/luii.garciia1" target="_blank" rel="noreferrer">
                        <FaFacebookSquare size={30} />
                    </a>
                    <a href="https://www.instagram.com/lfgarciaoc/" target="_blank" rel="noreferrer">
                        <FaInstagram size={30} />
                    </a>
                    <a href="https://twitter.com/LuisaFe48692047" target="_blank" rel="noreferrer">
                        <FaTwitter size={30} />
                    </a>
                    <a href="https://www.linkedin.com/in/lfgarciaoc/" target="_blank" rel="noreferrer">
                        <FaLinkedin size={30} />
                    </a>
                </div>
                <div className="text-footer">
                    <p className="copyright-text">Copyright <strong className="copy">&copy; 2022</strong>  - Luisa Garcia
                    </p>
                </div>
            </footer>
        </div>
    )
}

export default Contact
