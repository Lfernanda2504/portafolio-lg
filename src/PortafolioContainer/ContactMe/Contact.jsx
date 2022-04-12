import React from 'react'
import './contact.css'

const Contact = () => {
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
                        <form>
                            <label for="name">Nombre</label>
                            <input type="text" name="name" id="name" required/>
                            <label for="email">Email</label>
                            <input type="email" name="email" id="email" required/>
                            <label for="message">Mensaje</label>
                            <textarea name="message" id="message" cols="30" rows="5" required></textarea>
                            <button className="btn highlighted-btn" type="submit" value="submit">Enviar</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact
