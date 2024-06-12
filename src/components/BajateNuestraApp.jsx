import React from 'react';
import app from '../assets/app.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlay, faAppStore } from '@fortawesome/free-brands-svg-icons';

const BajateNuestraApp = () => {
  return (
    <div className='mt-20 container bg-[#FF8080]'>
        <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <img src={app} alt="Bajate nuestra app" className="rounded-lg shadow-md drop-shadow-2xl w-96 m-12" />
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">¡Descarga nuestra app!</h2>
          <div className='flex w-100 mt-12'>
            <button className="bg-transparent hover:bg-slate-300 text-gray-700 font-semibold hover:text-[#ff5555] py-2 px-6   border border-gray-700 hover:border-none text-xl border-opacity-50 rounded text-opacity-80 mr-6">
              <FontAwesomeIcon icon={faGooglePlay} className='font-xl mr-4' />Play Store
            </button>
            <button className="bg-transparent hover:bg-slate-300 text-gray-700 font-semibold hover:text-[#ff5555] py-2 px-6 border border-gray-700 hover:border-none text-xl border-opacity-50 rounded text-opacity-80">
              <FontAwesomeIcon icon={faAppStore} className='font-xl mr-4' />App Store
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BajateNuestraApp