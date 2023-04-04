import React from 'react';
import './index.css';
import { SocialIcon } from 'react-social-icons';

function Footer() {
    return (
        <footer className='footer'>
            
            <div className="card">
                <button class="button">
                    <h1>
                        Mas sobre nosotros
                    </h1>
                    </button>
            </div>
            <div className="card">
                <SocialIcon url="https://www.instagram.com/planilla.roja_unison/" network="instagram" bgColor='white' />
            </div>
        </footer>
    );
}

export default Footer;