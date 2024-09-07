import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import logo1 from "../../assets/logo1.png"  //Para el logo de la pagina//
import menu_icon from "../../assets/menu-icon.png"
import { Link } from 'react-scroll'

const Navbar = () => {

//Para que el Navbar cambie de apariencia cuando scrolleamos la pagina//

    const[sticky, setSticky] = useState(false)

    useEffect(()=>{
      window.addEventListener("scroll", ()=>{
        window.scrollY > 50 ? setSticky(true) : setSticky(false)
      })
    },[]);


const [mobileMenu, setMobileMenu] = useState(false);
const toggleMenu = ()=>{
    mobileMenu? setMobileMenu(false) : setMobileMenu(true);

}


//Para que el Navbar cambie de apariencia cuando scrolleamos la pagina// 

  return (
// "sticky" Para que el Navbar cambie de apariencia cuando scrolleamos la pagina//
     <nav className={`container ${sticky? "dark-nav" : ""}`}>   
      <img src={logo1} alt="" className='logo' />
      <ul className={mobileMenu?"":"hide-mobile-menu"}>
        <li><Link to="hero" smooth={true} offset={0} duration={500}>Principal</Link></li>
        <li><Link to="about" smooth={true} offset={-180} duration={500}>Sobre nosotros</Link></li>
        <li><Link to="servicios" smooth={true} offset={-80} duration={500}>Servicios</Link></li>
        <li><Link to="equipo" smooth={true} offset={-70} duration={500}>Equipo</Link></li>
        <li><Link to="media" smooth={true} offset={-180} duration={500}>Media</Link></li>
        <li><Link to="partebajatodo" smooth={true} offset={-220} duration={500} className='btn dark-btn'>Contactenos</Link></li>
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar
