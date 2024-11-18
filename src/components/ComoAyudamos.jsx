import React from 'react';
import './ComoAyudamos.css';
import useComoAyuda from '../hooks/useGsapComoAyuda';
import Circulo from '../assets/0.svg'

const ComoAyudamos = () => {
    useComoAyuda();
    return (
        <div className='container comoAyudamos'>
            <section className="comoAyuda" id="comoAyuda">
                <div className="comoAyuda-header">
                    <div className="comoAyuda-col">
                        <p className="callout">¿Cómo podemos ayudar?</p>
                    </div>
                    <div className="comoAyuda-col">
                        <h3>
                            Entregamos soluciones digitales modernas y soporte de diseño de
                            primer nivel a startups en crecimiento y grandes corporaciones desde
                            2020.
                        </h3>
                    </div>
                </div>
                <img src={Circulo} alt="w3" className='img-1' />
            </section>
        </div>
    );
}

export default ComoAyudamos;
