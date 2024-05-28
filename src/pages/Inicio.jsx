import React from 'react';
import nhow from '../assets/destinoTendencia/nhow.png';
import kimpton from '../assets/destinoTendencia/kimpton.png';
import presidential from '../assets/destinoTendencia/presidential.png';
import kiphotel from '../assets/destinoTendencia/kiphotel.png';
import marriot from '../assets/destinoTendencia/marriot.png';




export function Inicio() {
    return (
        <div className="bg-[#F6FDC3] py-16  flex justify-center">
            <div className="container mx-auto px-4 w-[1100px]">
                {/* Hero Heading */}
                <h1 className="text-4xl font-bold text-gray-800 mb-8">Destino tendencia</h1>

                {/* Image Gallery */}
                <div className="grid grid-cols-4 gap-4">
                    <div className="row-span-2 col-span-2 relative">
                        <img src={kimpton} alt="Kimpton Hotel" className="h-full w-full object-cover rounded-3xl" />
                        <div className="absolute top-0 w-full bg-gray-700 opacity-60 p-4 rounded-3xl text-[#d9d9d9]">
                            <h2 className="font-bold text-2xl">Kimpton Fitzroy London</h2>
                            <h4 className="text-xl">Hotel</h4>
                            <h5 className="text-base">Atracciones cerca, buen desayuno</h5>
                            <h5 className="text-base">9.1 - Excelente</h5>
                        </div>
                    </div>
                    <div className="relative">
                        <img src={nhow} alt="nHow Hotel" className="h-full w-full object-cover rounded-3xl" />
                        <div className="absolute top-0 w-full bg-gray-700 opacity-60 p-4 rounded-3xl text-[#d9d9d9]">
                            <h2 className="font-bold text-xl">nHow, London</h2>
                            <h4 className="text-base">Hotel</h4>
                            <h5 className="text-base">Staff amigable, delicias culinarias</h5>
                            <h5 className="text-base">9.2 - Excelente</h5>
                        </div>
                    </div>
                    <div className="relative">
                        <img src={presidential} alt="Presidential Hotel" className="h-full w-full object-cover" />
                        <div className="absolute top-0 w-full bg-gray-700 opacity-60 p-4 rounded-3xl text-[#d9d9d9]">
                            <h2 className="font-bold text-xl">Presidential Apart</h2>
                            <h4 className="text-base">Hotel</h4>
                            <h5 className="text-base">Confort y conveniencia</h5>
                            <h5>2.6 km de Hyde Park</h5>
                            <h5 className="text-base">8.2 - Muy bueno</h5>
                        </div>
                    </div>
                    <div className="relative">
                        <img src={kiphotel} alt="Kip Hotel" className="h-full w-full object-cover" />
                        <div className="absolute top-0 w-full bg-gray-700 opacity-60 p-4 rounded-3xl text-[#d9d9d9]">
                            <h2 className="font-bold text-xl">Kip Hotel</h2>
                            <h4 className="text-base">Hotel</h4>
                            <h5 className="text-base">Atracciones cerca, opcion de catering</h5>
                            <h5>5 km de Tower Bridge</h5>
                            <h5 className="text-base">8.2 - Muy bueno</h5>
                        </div>
                    </div>
                    <div className="relative">
                        <img src={marriot} alt="Marriot Hotel" className="h-full w-full object-cover rounded-3xl" />
                        <div className="absolute top-0 w-full bg-gray-700 opacity-60 p-4 rounded-3xl text-[#d9d9d9]">
                            <h2 className="font-bold text-xl">Marriot House</h2>
                            <h4 className="text-base">Hotel</h4>
                            <h5 className="text-base">Gimnasio, buena ubicacion</h5>
                            <h5>3.2 km del centro</h5>
                            <h5 className="text-base">8.8- Excelente</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}