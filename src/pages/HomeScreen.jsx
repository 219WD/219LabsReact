import React, { useState, useEffect } from 'react';
import './HomeScreen.css';
import Hero from '../components/Hero';
import Preload from '../components/Preload';
import NavBar from '../components/NavBar'
import ComoAyudamos from '../components/ComoAyudamos';
import AboutUs from '../components/AboutUs';
import AboutTeam from '../components/AboutTeam';
import Technologies from '../components/Technologies';

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
    </div>
  );
};

export default HomeScreen;
