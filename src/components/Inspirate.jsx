import React from 'react';
import imagen1 from '../assets/inspiracion/bali.jpg';
import imagen2 from '../assets/inspiracion/Bangkok.jpg';
import imagen3 from '../assets/inspiracion/botanic.jpg';
import imagen4 from '../assets/inspiracion/california.jpg';
import imagen5 from '../assets/inspiracion/tulip.jpg';







const Inspirate = () => {

  const [isHovered, setIsHovered] = React.useState(Array(5).fill(false)); // Array to track hover state for each image

  const handleHover = (index) => {
    setIsHovered((prevHoverState) => {
      const updatedHoverState = [...prevHoverState];
      updatedHoverState[index] = !prevHoverState[index];
      return updatedHoverState;
    });
  };


  return (
  <div className='w-full  mx-auto bg-[#F6FDC3]'>
    <h2 className='text-4xl font-bold text-gray-800 mt-20'>Inspirate para tu próximo viaje</h2>
    <div className='mt-12  grid grid-cols-7 mx-auto h-[500px] gap-3'>
       <div className="hover:col-span-3 hover:h-full  relative">
        <img src={imagen1} alt="Bali" className='object-cover w-full h-full hover:h-[500px] rounded-xl' />
        <div className='absolute top-0 left-0 right-0 w-full text-center  text-xl bg-gray-400 bg-opacity-50 p-2 text-[#FF8080]'>
          Vacaciones en familia
        </div>
       </div>
       <div className="hover:col-span-3 hover:h-full relative">
        <img src={imagen2} alt="Bangkok" className='object-cover w-full h-full hover:h-[500px] rounded-xl' />
        <div className='absolute top-0 left-0 right-0 w-full text-center  text-xl bg-gray-400 bg-opacity-50 p-2 text-[#FF8080]'>
          Festivales
        </div>
       </div>
       <div className="hover:col-span-3 hover:h-full relative">
        <img src={imagen3} alt="Botanic Garden" className='object-cover w-full h-full hover:h-[500px] rounded-xl' />
        <div className='absolute top-0 left-0 right-0 w-full text-center  text-xl bg-gray-400 bg-opacity-50 p-2 text-[#FF8080]'>
          Jardin Botanico
        </div>
       </div>
       <div className="hover:col-span-3 hover:h-full relative">
        <img src={imagen4} alt="California" className='object-cover w-full h-full hover:h-[500px] rounded-xl' />
        <div className='absolute top-0 left-0 right-0 w-full text-center  text-xl bg-gray-400 bg-opacity-50 p-2 text-[#FF8080]'>
          Road Trips
        </div>
       </div>
       <div className="hover:col-span-3 hover:h-full relative">
        <img src={imagen5} alt="Tulip" className='object-cover w-full h-full hover:h-[500px] rounded-xl' />
        <div className='absolute top-0 left-0 right-0 w-full text-center  text-xl bg-gray-400 bg-opacity-50 p-2 text-[#FF8080]'>
          Tulipanes
        </div>
       </div>
    </div>
  </div>
  )
}

export default Inspirate