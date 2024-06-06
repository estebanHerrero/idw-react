import React from 'react'

const CrudTable = () => {
  return <>
    <h5 className="text-2xl font-bold text-gray-800 mb-8 mt-12">Alojamientos actuales</h5>
    <table className='w-[1300px] text-center justify-center mx-auto'>
        <tr className='bg-[#CDFADB]'>
            <td className='p-4 text-gray-800 '>Nombre</td>
            <td className='p-4 text-gray-800 mr-12'>Tipo</td>
            <td>Descripcion</td>
            <td>Cantidad de dormitorios</td>
            <td>Cantidad de baños</td>
            <td>Precio por dia</td>
            <td>Valoracion</td>
        </tr>
        <tr className='mt-12 bg-red'>
          <td>Kimpton Fitroy</td>
          <td>Hotel</td>
          <td>Atracciones cerca, buen desayuno</td>
          <td>2</td>
          <td>1</td>
          <td>180</td>
          <td>9.2</td>
          <td className='flex w-100'>
              <button className='w-1/2 bg-transparent hover:bg-[#CDFADB] text-gray-700 font-semibold hover:text-gray-800 py-2 px-6 border border-gray-700 hover:border-none text-xl border-opacity-50 rounded text-opacity-80 mr-2'>Actualizar</button>
              <button className='w-1/2 bg-transparent hover:bg-[#CDFADB] text-gray-700 font-semibold hover:text-gray-800 py-2 px-6 border border-gray-700 hover:border-none text-xl border-opacity-50 rounded text-opacity-80'>Eliminar</button>
          </td>
        </tr>
    </table>
  </>
}

export default CrudTable