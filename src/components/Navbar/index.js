import React from 'react'
import './style.css'
import logo from '../../assets/logo532-no-bg.png';

const Navbar = () => {
    
  return (
    <nav className='sticky'>
        <div className="logo">
            <img src={logo} alt='Logo planilla roja'/>
        </div>
        <div className='nav'>
            <ul className="nav-links">
                <li>Sobre nosotros</li>
                <li>Misión</li>
                <li>Visión</li>
            </ul>
        </div>
        <button className="btn" >Contact</button>
    </nav>
  )
}

export default Navbar