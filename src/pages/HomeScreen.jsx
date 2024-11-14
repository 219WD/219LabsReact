import React, { useState, useEffect } from 'react';
import './HomeScreen.css';
import Hero from '../components/Hero';
import Preload from '../components/Preload';
import NavBar from '../components/NavBar';
import ComoAyudamos from '../components/ComoAyudamos';
import AboutUs from '../components/AboutUs';
import AboutTeam from '../components/AboutTeam';
import Technologies from '../components/Technologies';
import TripleSection from '../components/TripleSection';
import Catalogo from '../components/Catalogo';
import MejoresDiseños from '../components/MejoresDiseños';
import Screenshots from '../components/Screenshots';
import Saas from '../components/Saas';
import Footer from '../components/Footer';

const HomeScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 12000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container">
      {loading ? <Preload /> : <Hero />}
      <NavBar />
      <AboutUs />
      <ComoAyudamos />
      <AboutTeam />
      <Technologies />
      <TripleSection />
      <Catalogo />
      <MejoresDiseños />
      <Saas />
      <Screenshots />
      <Footer />
    </div>
  );
};

export default HomeScreen;
