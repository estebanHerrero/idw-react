import React from 'react';
import kimpton from '../assets/destinoTendencia/kimpton.png';
import presidential from '../assets/destinoTendencia/presidential.png';
import kiph from '../assets/destinoTendencia/kiph.png';
import marrioth from '../assets/destinoTendencia/marrioth.png';
import nhow from '../assets/destinoTendencia/nhow.jpeg';
import Carousel from '../components/Carousel';









export function Inicio() {

        return (
        <div className="bg-[#F6FDC3] py-16  flex justify-center px-20">
            <div className="container mx-auto px-4 w-[1200px]">

                {/* Destino  Tendencia */}
                <h1 className="text-4xl font-bold text-gray-800 mb-8">Destino tendencia</h1>
                <div className="grid grid-cols-4 grid-rows-5 gap-4">
                    <div className="row-span-5 col-span-2 relative">
                        <img src={kimpton} alt="Kimpton Hotel" className="h-full w-full object-cover rounded-3xl" />
                        <div className="absolute top-0 w-full bg-gray-700 opacity-60 p-4 rounded-3xl text-[#d9d9d9]">
                            <h2 className="font-bold text-2xl">Kimpton Fitzroy London</h2>
                            <h4 className="text-xl">Hotel</h4>
                            <h5 className="text-base">Atracciones cerca, buen desayuno</h5>
                            <h5 className="text-base">9.1 - Excelente</h5>
                        </div>
                    </div>
                    <div className="row-span-3 relative">
                        <img src={nhow} alt="nHow Hotel" className="h-full w-full object-cover rounded-3xl" />
                        <div className="absolute top-0 w-full bg-gray-700 opacity-60 p-4 rounded-3xl text-[#d9d9d9]">
                            <h2 className="font-bold text-xl">nHow, London</h2>
                            <h4 className="text-base">Hotel</h4>
                            <h5 className="text-base">Staff amigable, delicias culinarias</h5>
                            <h5 className="text-base">9.2 - Excelente</h5>
                        </div>
                    </div>
                    <div className="row-span-1 relative">
                        <img src={presidential} alt="Presidential Hotel" className="h-full w-full object-cover rounded-3xl" />
                        <div className="absolute top-0 w-full bg-gray-700 opacity-60 p-4 rounded-3xl text-[#d9d9d9]">
                            <h2 className="font-bold text-xl">Presidential Apart</h2>
                            <h4 className="text-base">Hotel</h4>
                            <h5 className="text-base">8.2 - Muy bueno</h5>
                        </div>
                    </div>
                    <div className="row-span-4 relative">
                        <img src={kiph} alt="Kip Hotel" className="h-full w-full object-cover rounded-3xl" />
                        <div className="absolute top-0 w-full bg-gray-700 opacity-60 p-4 rounded-3xl text-[#d9d9d9]">
                            <h2 className="font-bold text-xl">Kip Hotel</h2>
                            <h4 className="text-base">Hotel</h4>
                            <h5 className="text-base">Atracciones cerca, opcion de catering</h5>
                            <h5>5 km de Tower Bridge</h5>
                            <h5 className="text-base">8.2 - Muy bueno</h5>
                        </div>
                    </div>
                    <div className="row-span-2 relative">
                        <img src={marrioth} alt="Marriot Hotel" className="h-full w-full object-cover rounded-3xl" />
                        <div className="absolute top-0 w-full bg-gray-700 opacity-60 p-4 rounded-3xl text-[#d9d9d9]">
                            <h2 className="font-bold text-xl">Marriot House</h2>
                            <h4 className="text-base">Hotel</h4>
                            <h5 className="text-base">8.8- Excelente</h5>
                        </div>
                    </div>
                </div>

                {/* Especial Caribe */}
                <br />
                <Carousel />

                {/* Elige tu mejor alojamiento */}
                
                
            </div>
        </div>
    )
}