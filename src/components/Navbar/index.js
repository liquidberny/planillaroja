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
                <li><a href='#'>Sobre nosotros</a></li>
                <li><a href='#'>Misión</a></li>
                <li><a href='#'>Visión</a></li>
            </ul>
        </div>
        <a className="btn" href="#"><button>Contact</button></a>
    </nav>
  )
}

export default Navbar