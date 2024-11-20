import React from 'react'
import './Combos.css'
import fotoCombos from '../assets/Mockupcombos.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import paintCombo from '../assets/7.webp'
import useCombos from '../hooks/useGsapCombs'

const Combos = () => {
    useCombos();
    return (
        <div className='container combos'>
            <section className="catalog" id="catalog">
                <img src={fotoCombos} alt="computadora con captura del catalogo" />
                <img src={paintCombo} alt="paint" className="paintComb" />
                <div className="txt-catalog">
                    <h3>Combos para Empresas</h3>
                    <p>
                        Descubrí nuestros combos de servicios con promociones especiales. Elegí el plan que se ajuste a tus necesidades y presupuesto. Conoce las opciones que tenemos para ti y optimiza tu negocio con nuestras ofertas exclusivas.</p>
                    <button>
                        <div className="icon-catalog"><FontAwesomeIcon icon={faCircle} /></div>
                        <a href="https://canepadevpricing.vercel.app/combos.html">Ver promociones</a>
                    </button>
                </div>
            </section>
        </div>
    )
}

export default Combos