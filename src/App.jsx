import React, { useState, useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Mision from './Components/Mision/Mision'
import Servicios from './Components/Servicios/Servicios'
import Equipo from './Components/Equipo/Equipo'
import Virtudes from './Components/Virtudes/Virtudes'
import Media from './Components/Media/Media'
import Partebaja from './Components/Partebaja/Partebaja'
import Footer from './Components/Footer/Footer'


   function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [ pathname ]); 

    return null;
  }

  const App = () => { 

  return (
    <Router basename="/boceto">
      <ScrollToTop/>
      <Navbar/>
      <Routes>
      <Route path="/" element={
        <div>
        <Hero/>
        <About/>
        <Mision/>
        <Servicios/>
        <Equipo/>
        <Virtudes/>
        <Media/>
        <Partebaja/>
        <Footer/>
        </div>
     }/>
   </Routes>
   </Router>
  )
}

export default App
