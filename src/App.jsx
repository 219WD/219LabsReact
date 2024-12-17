import React, { Suspense, lazy, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactPixel from 'react-facebook-pixel';
import { Helmet } from 'react-helmet';
import { initLenis } from './hooks/useLenis'

const HomeScreen = lazy(() => import('./pages/HomeScreen'));

function App() {
  useEffect(() => {
    // Inicializar Lenis cuando se monta el componente
    const cleanupLenis = initLenis();

    // Limpiar al desmontar el componente
    return cleanupLenis;
  }, []);

  useEffect(() => {
    // 1. Inicializar el Pixel de Facebook
    const pixelOptions = {
      autoConfig: true,
      debug: false, // Coloca en true para ver la consola de debug
    };
    ReactPixel.init('1712217532972119', {}, pixelOptions);
    ReactPixel.pageView(); // Rastrear vistas de página

    // 2. Evento para rastrear el scroll
    const handleScroll = () => {
      const scrollPosition = window.scrollY || window.pageYOffset;
      ReactPixel.trackCustom('ScrollEvent', { scrollPosition });
    };
    window.addEventListener('scroll', handleScroll);

    // 3. Limpiar los eventos al desmontar
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <BrowserRouter>
      <Helmet>
        <title>Agencia Digital 219Labs | Diseño, Desarrollo Web y Marketing en Tucumán</title>
        <link rel="icon" type="image/png" href="/site-logo.png" />
        <meta name="description" content="219Labs es una agencia digital en Tucumán especializada en desarrollo web, software y marketing digital. Transformamos tu negocio digitalmente con soluciones innovadoras y creativas." />
        <meta name="keywords" content="Agencia Digital Tucumán, Diseño y Desarrollo Web, Marketing Digital, Software y Desarrollo Web" />
        <meta name="author" content="219Labs CanepaDev" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "219Labs",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Mate de Luna 1269",
              "addressLocality": "Tucumán",
              "addressRegion": "T",
              "postalCode": "4000",
              "addressCountry": "AR",
            },
            "telephone": "+5493816671884",
            "description":
              "Agencia de desarrollo web, software y marketing digital de Tucuman. 219LABS ha estado a la vanguardia de la innovación digital, creando productos web3 de última generación y brindando soporte de diseño excepcional tanto para startups como para grandes corporaciones.",
            "url": "https://219labs.vercel.app/",
          })}
        </script>
      </Helmet>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
