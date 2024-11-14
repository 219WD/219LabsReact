import React from 'react'
import './Saas.css'
import useSaas from '../hooks/useGsapSaas.jsx'

const Saas = () => {
    useSaas();
    return (
        <div className='container saas'>
            <section className="prices">
                <div className="prices-header">
                    <div className="prices-col"></div>
                    <div className="prices-col">
                        <h3>
                            Elija nuestra suscripción mensual y obtenga acceso continuo a nuestro equipo de expertos para resolver sus problemas con nuestros software
                            <span>.</span>
                        </h3>
                    </div>
                </div>
                <div className="prices-cta">
                    <a href="https://api.whatsapp.com/send/?phone=5493816671884&text=Hola,%20quiero%20contratar%20tus%20Web%20Services.&type=phone_number&app_absent=0">
                        <h2>Suscripciones desde</h2>
                        <h2>USD 500</h2>
                    </a>
                </div>
            </section>
        </div>
    )
}

export default Saas