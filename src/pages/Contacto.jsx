import React from 'react';
import Logo from '../assets/favicon.svg';

export function Contacto() {
    return (
        <div className="mx-auto px-20 py-16 bg-[#FFCF96]">
            <h1 className="text-4xl font-bold text-gray-800">Contacto</h1>
            <div className="grid grid-cols-2">
                <div>

                </div>
                <div>
                    <img src={Logo} alt="Logotipo" className="w-96" />
                </div>
            </div>
        </div>
    )
}