import React from 'react';
import './Catalogo.css';
import fotoCatalog from '../assets/Mockup.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import paintCatalog from '../assets/7.png'
import useCatalog from '../hooks/useGsapCatalog'

const Catalogo = () => {
useCatalog()
    return (
        <div className='container catalogo'>
            <section className="catalog" id="catalog">
                <div className="txt-catalog">
                    <h3>Catalogo de Plantillas</h3>
                    <p>Explorá nuestro catálogo completo con opciones de diseño y precios. Elegí el paquete que mejor se adapte a tus objetivos y presupuesto. Conoce las soluciones que tenemos para ti y lleva tu negocio al siguiente nivel.</p>
                    <button>
                        <div className="icon-catalog"><FontAwesomeIcon icon={faCircle} /></div>
                        <a href="https://canepadevpricing.vercel.app/">Ver catalogo</a>
                    </button>
                </div>
                <img src={fotoCatalog} alt="computadora con captura del catalogo" />
                <img src={paintCatalog} alt="paint" className="paintCatalog" />
            </section>
        </div>
    );
}

export default Catalogo;
