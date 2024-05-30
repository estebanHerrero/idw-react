import React from 'react';
import Logo from '../assets/logoidw.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';



export function Footer() {
    return (
        <div className="bg-[#CDFADB] shadow-md flex items-center justify-between p-4 px-20 h-72">
            <div className='w-40'>
                <img src={Logo} className='justify-center items-center text-center' alt="Logotipo" />
                <div className='justify-center items-center text-center'>
                    <p className='text-gray-700 text-xs mt-[-40px]'>Buenos Aires - Argentina</p>
                    <p className='text-gray-700  text-xs'>IDW - Check in</p>
                    <p className='text-gray-700 text-xs'>Todos los derechos reservados</p>
                </div>
            </div>
            <div className='flex mb-32'>
                <FontAwesomeIcon icon={faEarthAmericas} className="text-gray-500 ml-2 text-3xl mr-4" />
                <FontAwesomeIcon icon={faEarthAmericas} className="text-gray-500 ml-2 text-3xl mr-4" />
                <FontAwesomeIcon icon={faEarthAmericas} className="text-gray-500 ml-2 text-3xl mr-4" />
            </div>
            <div>
                <h3 className='text-gray-700 text-xl font-bold mb-2 justify-center items-center'>Ayuda</h3>
                <p className='text-gray-700 text-sm'>Como funciona IDW - Check in</p>
                <p className='text-gray-700 text-sm'>Terminos y condiciones</p>
                <p className='text-gray-700 text-sm'>Informacion legal</p>
                <p className='text-gray-700 text-sm'>Preferencias de cookies</p>
                <p className='text-gray-700 text-sm'>Aviso de privacidad</p>
            </div>
        </div>    
    )
}