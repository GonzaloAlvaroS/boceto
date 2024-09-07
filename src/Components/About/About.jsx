import React from 'react'
import "./About.css"
import imagenstock from "../../assets/imagenstock.png"

const About = () => {

  return (
    <div className='about'>
      <div className="about-left">
        <img src={imagenstock} alt="" className='imagen'/>
      </div>
      <div className="about-right">
        <h3>Sobre nosotros</h3>
        <h2>Caring & Compassionate Psychologists and Psychotherapists</h2>
        <p>SR Psychological Services is a group of caring and compassionate psychologists and psychotherapists located in midtown Manhattan. We have experience working in various clinical settings, with different patient populations and treating a wide range of psychological conditions
        </p>
        <button className='btn'>Mas Información</button>
      </div>
    </div>
  )
}

export default About
