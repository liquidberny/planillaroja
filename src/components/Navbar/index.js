import React, { useState, useEffect } from 'react'
import './style.css'
import logo from '../../assets/logo532-no-bg.png';

const Navbar = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });

  return (
    <nav className='sticky'>
        <div className="logo">
            <img src={logo} alt='Logo planilla roja'/>
        </div>
         {width > 673 && 
         <div className='nav'>
              <ul className="nav-links">
                  <li><a href='#about'>Sobre nosotros</a></li>
                  <li><a href='#mision'>Misión</a></li>
                  <li><a href='#vision'>Visión</a></li>
              </ul>
          </div>}
        <a className="btn" href="https://www.instagram.com/planilla.roja_unison/"><button>Contáctanos</button></a>
    </nav>
  )
}

export default Navbar