import "./Equipo.css"
import next_icon from "../../assets/next_icon.png"
import back_icon from "../../assets/back_icon.png"
import imagenstock from "../../assets/imagenstock.png"
import { useRef } from "react"


const Equipo = () => {

  const slider = useRef();
  let tx = 0;

const slideForward = ()=>{
     if(tx > -50){
      tx -= 25;
     }
     slider.current.style.transform = `translateX(${tx}%)`;
}
const slideBackward = ()=>{
  if(tx < 0){
    tx += 25;
   }
   slider.current.style.transform = `translateX(${tx}%)`;
}

  return (
    <div className='equipo'>
        <div className='titulos'>
            <p>Equipo</p>
            <h2>Help promote healing and lasting emotional, cognitive and behavioral change</h2>
        </div>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={imagenstock} alt="" className="equipoimagen"/>         
                 <h3>Nombre / Apellido</h3>
                 <span><b>(Cargo)</b></span>
              </div>
            </div>
           </li> 
          <li>
            <div className="slide">
              <div className="user-info">
              <img src={imagenstock} alt="" className="equipoimagen"/> 
                 <h3>Nombre / Apellido</h3>
                 <span><b>(Cargo)</b></span>
              </div>
            </div>
           </li>
          <li>
            <div className="slide">
              <div className="user-info">
              <img src={imagenstock} alt="" className="equipoimagen"/> 
                  <h3>Nombre / Apellido</h3>
                  <span><b>(Cargo)</b></span>
              </div>
             </div>
           </li>
          <li>
            <div className="slide">
              <div className="user-info">
              <img src={imagenstock} alt="" className="equipoimagen" /> 
                 <h3>Nombre / Apellido</h3>
                 <span><b>(Cargo)</b></span>
              </div>
            </div>
           </li>
           <li>
            <div className="slide">
              <div className="user-info">
              <img src={imagenstock} alt="" className="equipoimagen" /> 
                 <h3>Nombre / Apellido</h3>
                 <span><b>(Cargo)</b></span>
              </div>
            </div>
           </li>
           <li>
            <div className="slide">
              <div className="user-info">
              <img src={imagenstock} alt="" className="equipoimagen" /> 
                 <h3>Nombre / Apellido</h3>
                 <span><b>(Cargo)</b></span>
              </div>
            </div>
           </li>
        </ul>
      </div>
    </div>
  )
}

export default Equipo
