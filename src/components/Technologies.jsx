import React from 'react';
import './Technologies.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFingerprint, faLayerGroup, faFolder, faShieldAlt, faCrop, faCloud, faCube } from '@fortawesome/free-solid-svg-icons';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import bgTech from '../assets/17.webp'
import useTech from '../hooks/useGsapTech.jsx'


const Technologies = () => {
    useTech();
    return (
        <div className='container technologies'>
            <img src={bgTech} alt="paint" className='paint-2' />
            <section className="services" id="services">
                <div className="services-col">
                    <p className="callout">Trabajamos con</p>
                </div>
                <div className="services-col">
                    <div className="services-row">
                        <div className="service-item">
                            <div className="service-icon">
                                <FontAwesomeIcon icon={faFingerprint} />
                            </div>
                            <div className="service-title">
                                <p>Autenticación</p>
                            </div>
                        </div>
                        <div className="service-item">
                            <div className="service-icon">
                                <FontAwesomeIcon icon={faLayerGroup} />
                            </div>
                            <div className="service-title">
                                <p>Diseño</p>
                            </div>
                        </div>
                        <div className="service-item">
                            <div className="service-icon">
                                <FontAwesomeIcon icon={faFolder} />
                            </div>
                            <div className="service-title">
                                <p>Almacenamiento</p>
                            </div>
                        </div>
                        <div className="service-item">
                            <div className="service-icon">
                                <FontAwesomeIcon icon={faShieldAlt} />
                            </div>
                            <div className="service-title">
                                <p>Seguridad</p>
                            </div>
                        </div>
                    </div>
                    <div className="services-row">
                        <div className="service-item">
                            <div className="service-icon">
                                <FontAwesomeIcon icon={faJs} />
                            </div>
                            <div className="service-title">
                                <p>Desarrollo</p>
                            </div>
                        </div>
                        <div className="service-item">
                            <div className="service-icon">
                                <FontAwesomeIcon icon={faCrop} />
                            </div>
                            <div className="service-title">
                                <p>Edición</p>
                            </div>
                        </div>
                        <div className="service-item">
                            <div className="service-icon">
                                <FontAwesomeIcon icon={faCloud} />
                            </div>
                            <div className="service-title">
                                <p>Nube</p>
                            </div>
                        </div>
                        <div className="service-item">
                            <div className="service-icon">
                                <FontAwesomeIcon icon={faCube} />
                            </div>
                            <div className="service-title">
                                <p>Blockchain</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Technologies;
