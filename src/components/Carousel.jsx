import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import cadaques from '../assets/especialCaribe/cadaques.jpeg';
import canoa from '../assets/especialCaribe/canoa.png';
import tracadero from '../assets/especialCaribe/tracadero.png';
import wyn from '../assets/especialCaribe/wyn.png';



function Carousel() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1
  };
  return (
    <div className='mt-12 container'>
      <h2 className='text-4xl font-bold text-gray-800 mb-8'>Especial Caribe</h2>
      <Slider {...settings}>
        <div className='card'>
          <img src={cadaques} className='relative rounded-3xl w-100' alt="Cadaques"  />
          <div className="absolute top-0 bg-gray-700 opacity-60 p-4 rounded-3xl text-[#d9d9d9]">
            <h2 className="font-bold text-2xl">Cadaques Apt</h2>
            <h4 className="text-xl">Hotel</h4>
            <h5 className="text-base">Entire house, apartment</h5>
            <h5 className="text-base">8.8 - Muy bueno</h5>
          </div>
        </div>
        <div className='card'>
          <img src={canoa} className='relative rounded-3xl w-100' alt="Canoa" />
          <div className="absolute top-0 bg-gray-700 opacity-60 p-4 rounded-3xl text-[#d9d9d9]">
            <h2 className="font-bold text-2xl">Hotel Collection Canoa</h2>
            <h4 className="text-xl">Hotel</h4>
            <h5 className="text-base">Tropical paradise, friendly staff</h5>
            <h5 className="text-base">9.2 - Excelente</h5>
          </div>
        </div>
        <div className='card'>
          <img src={tracadero} className='relative rounded-3xl w-100' alt="" />
          <div className="absolute top-0 bg-gray-700 opacity-60 p-4 rounded-3xl text-[#d9d9d9]">
            <h2 className="font-bold text-2xl">Tracadero Beach Resort</h2>
            <h4 className="text-xl">Hotel</h4>
            <h5 className="text-base">Friendly service</h5>
            <h5 className="text-base">9.0 - Excelente</h5>
          </div>
        </div>
        <div className='card'>
          <img src={wyn}  className='relative rounded-3xl w-100' alt="" />
          <div className="absolute top-0 bg-gray-700 opacity-60 p-4 rounded-3xl text-[#d9d9d9]">
            <h2 className="font-bold text-2xl">Wyndham</h2>
            <h4 className="text-xl">Hotel</h4>
            <h5 className="text-base">Beachfront Bungalows</h5>
            <h5 className="text-base">7.4 - Bueno</h5>
          </div>
        </div>
        <div className='card'>
          <h3>5</h3>
        </div>
        <div className='card'>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  )
}

export default Carousel;