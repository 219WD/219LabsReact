import React, { Suspense, lazy, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
  return (
    <BrowserRouter>
      <Helmet>
        <title>219Labs | Agencia de Diseño y Desarrollo Web | @CanepaDev</title>
        <link rel="icon" type="image/svg+xml" href="/src/assets/site-logowebp" />
        <meta
          name="description"
          content="Agencia de desarrollo web, software y marketing digital de Tucuman. ¡Transformamos tu negocio digitalmente!"
        />
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
              "219LABS ha estado a la vanguardia de la innovación digital, creando productos web3 de última generación y brindando soporte de diseño excepcional tanto para startups como para grandes corporaciones.",
            "url": "https://219labs.com/",
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