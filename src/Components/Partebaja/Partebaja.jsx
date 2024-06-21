import React from 'react'
import "./Partebaja.css"
import logo from "../../assets/logo.png"
import instagram from "../../assets/instagram.png"
import facebook from "../../assets/facebook.png"
import youtube from "../../assets/youtube.png"

const Partebaja = () => {
  const handleButtonClick = () => {
    window.open('https://www.instagram.com/cocacola/', '_blank');
  };
  const handleButtonClick2 = () => {
    window.open('https://www.facebook.com/cocacolaperu', '_blank');
  };
  const handleButtonClick3 = () => {
    window.open('https://www.youtube.com/channel/UCosXctaTYxN4YPIvI5Fpcrw', '_blank');
  };





  return (
    <div className='partebajatodo'>
     <div className="granlineaazul">
     <p className="titulolinea"><b>TEXTO DE EJEMPLO / NOMBRE DE LA EMPRESA</b></p>
     </div>
      <div className='logoyredes'>
       <img src={logo} alt="" />
       <button onClick={handleButtonClick} className='btnredes'><img src={instagram} alt="" /></button>
       <button onClick={handleButtonClick2} className='btnredes2'><img src={facebook} alt="" /></button>
       <button onClick={handleButtonClick3} className='btnredes3'><img src={youtube} alt="" /></button>
      </div>
      <div className='infobaja1'>
       <h4>Informacion de contacto</h4>
       <div className="lineaazul1"></div>
       <p className='infodireccion'><b>Direccion:</b> 303 Fifth Ave., Suite 1005 New York, NY 10016</p>
       <p className='infotelefono'><b>Telefono:</b> 1.917.705.6155</p>
       <p className='infoemail'><b>Email:</b> office@SRPsychologicalservices.com</p>
      </div>
      <div className='infobaja2'>
       <h4>Enlaces rapidos</h4>
       <div className="lineaazul2"></div>
       <p className='infodireccion'><b>● Sobre nosotros</b></p>
       <p className='infotelefono'><b>● Servicios</b></p>
       <p className='infoemail'><b>● Equipo</b></p>
       <p className='infomedia'><b>● Media</b></p>
       <p className='infocontacto'><b>● Contactenos</b></p>
      </div>
      <div className='infobaja3'>
       <h4>Horarios de atención</h4>
       <div className="lineaazul3"></div>
       <p className='infodireccion'><b>Lunes a Viernes:</b> 8:00am – 9:00pm</p>
       <p className='infotelefono'><b>Sabado:</b> 8:00am – 6:00pm</p>
       <p className='infoemail'><b>Domingo:</b> 9:00am - 6:00pm</p>
      </div>
    </div>
  )
}

export default Partebaja

