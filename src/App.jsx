import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import Departments from './components/Departments';


const App = () => {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <AboutUs />
      <Departments />
      {/* <Footer /> */}
    </div>
  );
};

export default App;
