import React from 'react'
import './AboutTeam.css'
import useAboutTeam from '../hooks/useGsapAboutTeam'
import distortion from '../assets/7.webp'

const AboutTeam = () => {
    useAboutTeam();
    return (
        <div className='container aboutTeam'>
            <section className='team'>
                <div className="txt about">
                    <h3>
                        Nuestro equipo de expertos se especializa en crear productos digitales de ultima generacion y proporcionar soporte tecnico de alta calidad.
                    </h3>
                </div>
            </section>
            <img src={distortion} alt="paint" className='paint' />
        </div>
    )
}

export default AboutTeam