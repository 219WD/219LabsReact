import React, { useRef, useEffect } from 'react';
import './MejoresDiseños.css';
import grad from '../assets/grad.webp';
import useGsapProjects from '../hooks/useGsapProjects';
import projects from '../utils/Data';

const MejoresDiseños = () => {
    const containerRef = useRef(null);
    useGsapProjects(containerRef); // La referencia se pasa al hook    

    return (
        <div ref={containerRef} className='container mejoresDiseños'>
            <section className="promo" id="cases">
                <div className="promo-bg">
                    <img src={grad} alt="Promotional background" />
                </div>
                <div className="promo-header">
                    <h2>Mira</h2>
                    <h2>Nuestros mejores</h2>
                    <h1>Diseños</h1>
                </div>
            </section>

            <section className="sticky-cards">
                <section className="projecr-hero pinned"></section>

                {projects.map((project, index) => (
                    <section key={index} className={`card ${index === projects.length - 1 ? 'scroll' : 'pinned'}`}>
                        <div className="project">
                            <div className="project-copy">
                                <div className="project-header">
                                    <h3>{project.title}</h3>
                                    <p>{project.id}</p>
                                </div>
                                <p>{project.description}</p>
                                <div className="project-cta">
                                    <p>Visita su sitio</p>
                                    <div className="project-cta-row">
                                        <div className="cta">
                                            <a href={project.pageLink} target="_blank" rel="noopener noreferrer">
                                                Página
                                            </a>
                                        </div>
                                        <div className="cta">
                                            <a href={project.instagramLink} target="_blank" rel="noopener noreferrer">
                                                Instagram
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="project-img">
                                <img src={project.image} alt={project.title} />
                            </div>
                        </div>
                    </section>
                ))}

                <section className="footer"></section>
            </section>
        </div>
    );
};

export default MejoresDiseños;
