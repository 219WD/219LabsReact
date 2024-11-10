import React, { useState, useEffect } from 'react';
import './HomeScreen.css';
import Hero from '../components/Hero';
import Preload from '../components/Preload';

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
    </div>
  );
};

export default HomeScreen;
