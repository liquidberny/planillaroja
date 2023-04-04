import React from 'react';
import './style.css';
import { SocialIcon } from 'react-social-icons';

function Footer() {
    return (
        <footer className='footer'>
            
            <div className="card">
                <a href="https://www.instagram.com/planilla.roja_unison/">
                <button className="button">
                    <h1>Más sobre nosotros</h1>
                </button>
                </a>
            </div>
            <div className="card">
                <SocialIcon url="https://www.instagram.com/planilla.roja_unison/" network="instagram" bgColor='white' />
            </div>
        </footer>
    );
}

export default Footer;