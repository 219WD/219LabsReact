import React, { useEffect, useState } from 'react'

export const Descargar = () => {
    const [deferredPrompt, setDeferredPrompt] = useState(null);
    // Manejar el evento 'beforeinstallprompt'
    useEffect(() => {
        const handleBeforeInstallPrompt = (e) => {
            e.preventDefault(); // Prevenir la visualización automática del prompt
            setDeferredPrompt(e); // Guardar el evento para usarlo más tarde
        };

        window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

        return () => {
            window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
        };
    }, []);

    const handleAddToHomeScreen = () => {
        if (deferredPrompt) {
            deferredPrompt.prompt(); // Mostrar el prompt de instalación
            deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('El usuario aceptó instalar la aplicación.');
                } else {
                    console.log('El usuario rechazó instalar la aplicación.');
                }
                setDeferredPrompt(null); // Limpiar el evento después de su uso
            });
        }
    };
    return (
        <>
            <a className="menu-item a-nav" href="#contact" onClick={handleAddToHomeScreen}>
                <span className="span">06</span>
                <span className="span">Descargar</span>
            </a>
        </>

    )
}