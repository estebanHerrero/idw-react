import React from 'react';
import Logo from '../assets/logoidw.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';




export function Footer() {
    return (
        <div className="bg-[#CDFADB] shadow-md flex items-center justify-between p-4 px-20 h-72">
            <div className='w-40'>
                <img src={Logo} className='justify-center items-center text-center' alt="Logotipo" />
                <div className='justify-center items-center text-center'>
                    <p className='text-gray-700 text-xs mt-[-40px]'>Buenos Aires - Argentina</p>
                    <p className='text-gray-700  text-xs'>IDW - Check in</p>
                    <p className='text-gray-700 text-xs'>&copy; Todos los derechos reservados</p>
                </div>
            </div>
            <div className='flex mb-32'>
                <FontAwesomeIcon icon={faFacebook} className='pr-4 text-4xl text-gray-700' />
                <FontAwesomeIcon icon={faInstagram} className='pr-4 text-4xl text-gray-700' />
                <FontAwesomeIcon icon={faXTwitter} className='pr-4 text-4xl text-gray-700' />
            </div>
            <div>
                <h3 className='text-gray-700 text-xl font-bold mb-2 justify-center items-center'>Ayuda</h3>
                <ul>
                    <li>
                        <a href="#" className="text-gray-700 text-sm hover:text-[#FF8080]">Como funciona IDW - Check in</a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-700 text-sm hover:text-[#FF8080]">Terminos y condiciones</a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-700 text-sm hover:text-[#FF8080]">Informacion legal</a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-700 text-sm hover:text-[#FF8080]">Preferencias de cookies</a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-700 text-sm hover:text-[#FF8080]">Aviso de privacidad</a>
                    </li>
                </ul>
            </div>
        </div>    
    )
}