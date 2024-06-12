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
       <div className="hover:col-span-3 hover:h-full">
        <img src={imagen1} alt="Bali" className='object-cover w-full h-full hover:h-[500px] rounded-xl' />
       </div>
       <div className="hover:col-span-3 hover:h-full">
        <img src={imagen2} alt="Bangkok" className='object-cover w-full h-full hover:h-[500px] rounded-xl' />
       </div>
       <div className="hover:col-span-3 hover:h-full">
        <img src={imagen3} alt="Botanic Garden" className='object-cover w-full h-full hover:h-[500px] rounded-xl' />
       </div>
       <div className="hover:col-span-3 hover:h-full">
        <img src={imagen4} alt="California" className='object-cover w-full h-full hover:h-[500px] rounded-xl' />
       </div>
       <div className="hover:col-span-3 hover:h-full">
        <img src={imagen5} alt="Tulip" className='object-cover w-full h-full hover:h-[500px] rounded-xl' />
       </div>
    </div>
  </div>
  )
}

export default Inspirate