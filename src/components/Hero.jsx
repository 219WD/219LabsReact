import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import './Hero.css'
import Grad from '../assets/grad.webp'

const Hero = () => {
    useEffect(() => {
        // Animar el fondo de blanco a negro
        gsap.to(".hero", {
            backgroundColor: "#000000", // Cambiar el fondo a negro
            duration: 1.5, // Duración de la animación
            ease: "power2.inOut", // Efecto de la animación
        });

        // Animar el gradiente de opacidad 0 a 1
        gsap.to(".hero-img", {
            opacity: 1, // Cambiar la opacidad a 1
            duration: 1.5, // Duración de la animación
            delay: 1.5, // Retardar la animación para que suceda después de que el fondo cambie
            ease: "power2.inOut", // Efecto de la animación
        });
    }, []);

    return (
        <div className="container hero">
            <section className="hero" id="hero">
                <div className="hero-img"><img src={Grad} alt="Gradiant" /></div>
                <div className="hero-header">
                    <div className="hero-col">
                        <h1>219LABS</h1>
                    </div>
                    <div className="hero-col">
                        <p id="site-intro">
                            Desde 2020, 219LABS ha estado a la vanguardia de la innovación
                            digital, creando productos web3 de última generación y brindando
                            soporte de diseño excepcional tanto para startups como para
                            grandes corporaciones.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero;
