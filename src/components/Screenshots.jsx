import React from 'react'
import './Screenshots.css'
import feature1 from '../assets/feature-1.png'
import feature2 from '../assets/feature-2.png'
import feature3 from '../assets/feature-3.png'
import feature4 from '../assets/feature-4.png'

const Screenshots = () => {
    return (
        <div className='container screenshots'>
            <section className="features">
                <div className="features-col">
                    <div className="features-row">
                        <div className="features-item">
                            <div className="features-icon">
                                <img src={feature1} alt="" />
                            </div>
                            <div className="features-title">
                                <h2>DE UNA GRAN IDEA A UN GRAN PROYECTO</h2>
                                <p>
                                    Nuestros proyectos se gestionan en conjunto. Colaboramos contigo
                                    para definir objetivos, dividir el proceso de desarrollo en
                                    tareas manejables y entregar informes de progreso semanales.
                                </p>
                            </div>
                        </div>
                        <div className="features-item">
                            <div className="features-icon">
                                <img src={feature2} alt="" />
                            </div>
                            <div className="features-title">
                                <h2>INFORMACIÓN SEMANAL DETALLADA</h2>
                                <p>
                                    Al ejecutar nuestros proyectos de esta forma, garantizamos claridad y
                                    enfoque. Juntos, describimos las tareas necesarias y le brindamos
                                    informes semanales detallados sobre nuestro progreso.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="features-row">
                        <div className="features-item">
                            <div className="features-icon">
                                <img src={feature3} alt="" />
                            </div>
                            <div className="features-title">
                                <h2>PROGRESO SEMANAL CONSTANTE</h2>
                                <p>
                                    Adoptamos un enfoque claro y detallado en conjunto con el cliente. Esto
                                    implica establecer objetivos claros, para dividir el desarrollo en
                                    tareas específicas y entregar actualizaciones semanales constantes.
                                </p>
                            </div>
                        </div>
                        <div className="features-item">
                            <div className="features-icon">
                                <img src={feature4} alt="" />
                            </div>
                            <div className="features-title">
                                <h2>SEGUIMIENTO DEL PROGRESO SEMANAL</h2>
                                <p>
                                    Nuestra metodología de trabajo garantiza que definamos las tareas
                                    de manera colaborativa, y proporcionemos informes de progreso semanales transparentes
                                    a nuestros clientes.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Screenshots