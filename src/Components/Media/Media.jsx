import React from 'react'
import "./Media.css"
import imagenstock from "../../assets/imagenstock.png"

const Media = () => {

  return (
    <div className='media'>
      <div className="media-left">
      <h3>Fotos y Videos</h3>
        <h2>Caring & Compassionate Psychologists and Psychotherapists</h2>
        <p>SR Psychological Services is a group of caring and compassionate psychologists and psychotherapists located in midtown Manhattan. We have experience working in various clinical settings, with different patient populations and treating a wide range of psychological conditions
        </p>
        <button className='btn'>Ver más</button>
      </div>
      <div className="media-right">
        <img src={imagenstock} alt="" className='imagen1'/>
      </div>
    </div>
  )
}

export default Media