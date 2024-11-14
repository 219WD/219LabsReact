import React from 'react'
import './TripleSection.css'
import photo1 from '../assets/hurricane.png'
import photo2 from '../assets/MacBook Air Mockup.png'
import photo3 from '../assets/mac2.png'
import useTriple from '../hooks/useGsapTripleSection.jsx'

const TripleSection = () => {
    useTriple();
    return (
        <div className='container tripleSection'>
            <section className='triple'>
                <div className="first">
                    <div className="txt-triple">
                        <h3>Diseños Responsivos</h3>
                        <p>Creamos sitios web responsivos y accesibles, optimizados para que se vean y funcionen perfectamente en cualquier dispositivo, ya sea móvil, tablet o computadora, brindando una experiencia visual impecable.</p>
                    </div>
                    <img src={photo1} alt="mockup" />
                </div>
                <div className="second">
                    <div className="txt-triple">
                        <h3>Motores de búsqueda</h3>
                        <p>Optimizamos tu página para posicionarla en los principales buscadores, aumentando su relevancia y visibilidad. Con estrategias de SEO, tu sitio alcanzará más usuarios, logrando que te encuentren fácilmente en internet.</p>
                    </div>
                    <img src={photo2} alt="mockup" />
                </div>
                <div className="third">
                    <div className="txt-triple">
                        <h3>Analisis de mercado</h3>
                        <p>Analizamos el tráfico de tu página para entender el comportamiento de los visitantes. Optimiza tus estrategias con datos reales que ayudan a mejorar la experiencia y alcanzar tus objetivos de negocio.
                        </p>
                    </div>
                    <img src={photo3} alt="mockup" />
                </div>
            </section>
        </div>
    )
}

export default TripleSection