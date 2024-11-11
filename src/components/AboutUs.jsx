import React from 'react'
import './About.css'
import logo from '../assets/site-logo.png'
import www from '../assets/1.svg'
import useAboutUs from '../hooks/useGsapAboutUs.jsx';


const AboutUs = () => {
    useAboutUs();
    return (
        <div className='container about'>
            <img src={logo} alt="Logo" className='LogoAbout' />
            <div className="txt">
                <p className="callout">¿Quiénes somos?</p>
                <p className='parrafoAbout'>
                    Somos una agencia de desarrollo de software y diseño web especializada en pequeñas y medianas empresas,
                    ayudamos al crecimiento exponencial de tu empresa y potenciamos tu marca.
                    Mostramos al mundo tu empresa con estrategias de marketing y contenido de valor.
                    Somos la agencia digital dedicada a crear y potenciar marcas.
                </p>
                <img src={www} alt="web3" className='img-2' />
            </div>
        </div>
    )
}

export default AboutUs