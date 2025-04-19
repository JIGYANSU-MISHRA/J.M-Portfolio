// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/Hero';
import Skills from './components/Skills/Skills'
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import ContactMe from './components/ContactMe/ContactMe';
import Footer from './components/Footer/Footer'
import Certification from './components/Certification/Certification';

const App = () =>{
  return (
    <>
    <Navbar/>
    <div><HeroSection/>
    <Skills />
    <Certification />
    <Experience/>
    <Projects/>
    <ContactMe/>
    </div>
    <Footer/>
    
    </>
  )

};

export default App;