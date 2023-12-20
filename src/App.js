import React from 'react';
import Header from './components/header';
import HeroSection from './components/herosection';
import ShopSection from './components/shopsection';
import Footer from './components/footer';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <ShopSection />
      <Footer />
    </>
  );
}

export default App;
