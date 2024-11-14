import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';
import grad from '../assets/grad.webp';

const Footer = () => {
    const formRef = useRef(null);
    const [formStatus, setFormStatus] = React.useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();

        const nombre = event.target.nombre.value;
        const empresa = event.target.empresa.value;
        const email = event.target.email.value;
        const telefono = event.target.telefono.value;
        const mensaje = event.target.mensaje.value;

        fetch(`https://docs.google.com/forms/d/e/1FAIpQLSf0DOcuoi68lHZleYzInFjo2DTvbj4G4W6I7X16ZVKHxXybjA/formResponse?submit=Submit&usp=pp_url&entry.1991879858=${encodeURIComponent(nombre)}&entry.1557352789=${encodeURIComponent(empresa)}&entry.415805673=${encodeURIComponent(email)}&entry.1182868963=${encodeURIComponent(telefono)}&entry.562288580=${encodeURIComponent(mensaje)}`, {
            method: 'POST',
            mode: 'no-cors'
        })
            .then(() => {
                setFormStatus('success');
                formRef.current.reset();
            })
            .catch(() => {
                setFormStatus('error');
            });
    };

    return (
        <div className='container footer'>
            <footer id="contact">
                <div className="footer-bg">
                    <img src={grad} alt="" />
                </div>
                <div className="footer-header">
                    <h2>Let's</h2>
                    <h2>Talk</h2>
                </div>
                <div className="footer-sub-header">
                    <h2>Completa el formulario</h2>
                    <h2>y</h2>
                    <h2>Ponte en contacto</h2>
                </div>

                <div className="footer-ctas">
                    <div className="footer-ctas-col">
                        <div className="footer-cta-icon">
                            <a href="https://www.instagram.com/canepadev/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                        </div>
                        <div className="footer-cta-icon">
                            <a href="https://www.youtube.com/@CanepaDev" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faYoutube} />
                            </a>
                        </div>
                    </div>
                    <div className="footer-ctas-col">
                        <div className="footer-cta-icon">
                            <a href="#hero">
                                <FontAwesomeIcon icon={faArrowUp} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-form">
                    <form className="form-col" id="contacto" ref={formRef} onSubmit={handleSubmit}>
                        <div className="form-row">
                            <input type="text" id="nombre" name="nombre" placeholder="Tu nombre" required />
                            <input type="text" id="empresa" name="empresa" placeholder="Nombre de tu empresa" required />
                        </div>
                        <div className="form-row">
                            <input type="email" id="email" name="email" placeholder="Email" required />
                        </div>
                        <div className="form-row">
                            <input type="text" id="telefono" name="telefono" placeholder="Telefono" required />
                        </div>
                        <div className="form-row">
                            <textarea id="mensaje" rows="4" name="mensaje" placeholder="Mensaje" required></textarea>
                        </div>

                        <div className="form-col">
                            <div className="submit-btn">
                                <input id="submit-button" type="submit" value="Enviar" style={{
                                    position: 'relative',
                                    fontFamily: '"Archivo Black", serif',
                                    fontSize: '3vw',
                                    color: '#fff',
                                    textTransform: 'uppercase',
                                    border: 'none',
                                    outline: 'none',
                                    cursor: 'pointer',
                                    flex: 2,
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    background: 'linear-gradient(to right, #fc002d, #ff6b00)',
                                    borderRadius: '8px',
                                }} />
                            </div>
                        </div>
                    </form>

                    {formStatus === 'success' && <p>¡Mensaje enviado con éxito!</p>}
                    {formStatus === 'error' && <p>Error al enviar el mensaje. Inténtalo nuevamente.</p>}
                </div>

                <div className="footer-copyright">
                    <p>219Labs</p>
                    <p>CanepaDev</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;