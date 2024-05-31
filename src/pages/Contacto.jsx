import React from 'react';
import Logo from '../assets/logoidw.png';
import Favi from '../assets/favicon.svg';

export function Contacto() {
    return (
        <div name="contact" className='mx-auto flex h-screen bg-[#F6FDC3]'>
            <h1 className="text-4xl font-bold text-gray-800 bg-[#FF8080] pl-12 pt-12">Contacto</h1>
            <div className="w-[56%] h-screen bg-[#FF8080]  flex justify-center items-center">
                <form action="" className="flex flex-col">
                    <label className="relative">
                        <input type="text" className="h-14 w-96 px-6 text-xl bg-[#F6FDC3] border rounded-lg border-gray-500 border-opacity-50 outline-none focus:border-gray-500 focus:text-gray-800 transition duration-200 mb-6" />
                        <span className="text-lg text-gray-500 text-opacity-80 absolute left-0 top-2 mx-4 transition duration-200 input-text ">nombre</span>
                    </label>
                    <label className="relative">
                        <input type="text" className="h-14 w-96 px-6 text-lg bg-[#F6FDC3] border rounded-lg border-gray-500 border-opacity-50 outline-none focus:border-gray-500 focus:text-gray-800 transition duration-200 mb-6" />
                        <span className="text-lg text-gray-500 text-opacity-80 absolute left-0 top-2 mx-4 transition duration-200 input-text">email</span>
                    </label>
                    <label className="relative">
                        <input type="text" className="h-14 w-96 px-6 text-lg bg-[#F6FDC3] border rounded-lg border-gray-500 border-opacity-50 outline-none focus:border-gray-500 focus:text-gray-800 transition duration-200 mb-12" />
                        <span className="text-lg text-gray-500 text-opacity-80 absolute left-0 top-2 mx-4 transition duration-200 input-text">mensaje</span>
                    </label>
                    <div className='flex justify-end'>
                        <button className="bg-transparent hover:bg-slate-300 text-gray-700 font-semibold hover:text-[#ff5555] py-2 px-6 border border-gray-700 hover:border-none text-xl border-opacity-50 rounded text-opacity-80">
                        Enviar
                        </button>
                    </div>
                </form>
            </div>
            <div className="w-auto h-screen flex items-center">
                <img src={Favi} className='w-96' alt="" />
            </div>
        </div>
    )
}