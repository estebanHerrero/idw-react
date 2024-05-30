import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import cadaques from '../assets/especialCaribe/5.png';
import canoa from '../assets/especialCaribe/canoa.png';
import tracadero from '../assets/especialCaribe/6.png';
import wyn from '../assets/especialCaribe/1.png';
import wyn2 from '../assets/especialCaribe/2.png';
import wyn3 from '../assets/especialCaribe/3.png';


function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style, display: "block", background: "#FF8080" }}
    onClick={onClick} />
  );
}


function Carousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breackpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className='mt-12 container'>
      <h2 className='text-4xl font-bold text-gray-800 mb-8'>Especial Caribe</h2>
      <Slider {...settings}>
        <div className='card px-2'>
          <img src={cadaques} className='relative rounded-2xl w-100' alt="Cadaques"  />
          <div className="absolute top-0 bg-gray-700 opacity-60 p-2 rounded-xl text-[#d9d9d9]">
            <h2 className="font-bold text-2xl">Cadaques Apt</h2>
            <h4 className="text-xl">Hotel</h4>
            <h5 className="text-base">Entire house, apartment</h5>
            <h5 className="text-base">8.8 - Muy bueno</h5>
          </div>
        </div>
        <div className='card px-2'>
          <img src={canoa} className='relative rounded-2xl w-100' alt="Canoa" />
          <div className="absolute top-0 bg-gray-700 opacity-60 p-2 rounded-xl text-[#d9d9d9]">
            <h2 className="font-bold text-2xl">Hotel Collection Canoa</h2>
            <h4 className="text-xl">Hotel</h4>
            <h5 className="text-base">Tropical paradise, friendly staff</h5>
            <h5 className="text-base">9.2 - Excelente</h5>
          </div>
        </div>
        <div className='card px-2'>
          <img src={tracadero} className='relative rounded-2xl w-100' alt="Tracadero Hotel" />
          <div className="absolute top-0 bg-gray-700 opacity-60 p-2 rounded-xl text-[#d9d9d9]">
            <h2 className="font-bold text-2xl">Tracadero Beach Resort</h2>
            <h4 className="text-xl">Hotel</h4>
            <h5 className="text-base">Friendly service</h5>
            <h5 className="text-base">9.0 - Excelente</h5>
          </div>
        </div>
        <div className='card px-2'>
          <img src={wyn}  className='relative rounded-2xl' alt="Wyndhall" />
          <div className="absolute top-0 bg-gray-700 opacity-60 p-2 rounded-xl text-[#d9d9d9]">
            <h2 className="font-bold text-2xl">Wyndham</h2>
            <h4 className="text-xl">Hotel</h4>
            <h5 className="text-base">Beachfront Bungalows</h5>
            <h5 className="text-base">7.4 - Bueno</h5>
          </div>
        </div>
        <div className='card px-2'>
          <img src={wyn2}  className='relative rounded-2xl' alt="Wyndhall" />
            <div className="absolute top-0 bg-gray-700 opacity-60 p-2 rounded-xl text-[#d9d9d9]">
              <h2 className="font-bold text-2xl">Iberostar Hacienda</h2>
              <h4 className="text-xl">Hotel</h4>
              <h5 className="text-base">Ubicacion frente a la playa</h5>
              <h5 className="text-base">8.9 - Excelente</h5>
            </div>
        </div>
        <div className='card px-2'>
        <img src={wyn3}  className='relative rounded-2xl' alt="Wyndhall" />
            <div className="absolute top-0 bg-gray-700 opacity-60 p-2 rounded-xl text-[#d9d9d9]">
              <h2 className="font-bold text-2xl">Hilton La Romana</h2>
              <h4 className="text-xl">Hotel</h4>
              <h5 className="text-base">Entretenimiento nocturno</h5>
              <h5 className="text-base">8.8 - Excelente</h5>
            </div>
        </div>
      </Slider>
    </div>
  )
}

export default Carousel;