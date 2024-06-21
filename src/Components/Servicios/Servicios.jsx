import React from 'react'
import "./Servicios.css"
import imagenstock from "../../assets/imagenstock.png"

const Servicios = () => {
  return (
    <div className='servicios'>
        <div className='titulos'>
          <p>Servicios</p>
          <h2>Help promote healing and lasting emotional, cognitive and behavioral change</h2>
        </div>
          <div className="gallery">
            <div className='servicio1'>
              <img src={imagenstock} alt="" />
              <div className='servicio1texto'>
               <p>Servicio 1</p>
              </div>
            </div>
            <div className='servicio1'>
              <img src={imagenstock} alt="" />
              <div className='servicio1texto'>
               <p>Servicio 2</p>
              </div>
            </div>
            <div className='servicio1'>
              <img src={imagenstock} alt="" />
              <div className='servicio1texto'>
               <p>Servicio 3</p>
              </div>
            </div>
          </div>
      <button className='btn serviciosbtn'>Ver servicios</button>
    </div>
  )
}

export default Servicios
