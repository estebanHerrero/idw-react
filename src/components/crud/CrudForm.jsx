import React from 'react'

const CrudForm = () => {
  return   <>
        <div className='flex justify-center'>
            <form className='grid grid-cols-1 w-[500px]'> 
                <label htmlFor="nombre" className='text-gray-800'>Nombre: </label>
                <input type="text" name='nombre' />
                <label htmlFor="tipo" className='text-gray-800'>Tipo: </label>
                <input type="text" name='tipo' />
                <label htmlFor="descripcion" className='text-gray-800'>Descripcion: </label>
                <input type="text" name='descripcion' />
                <label htmlFor="cdormitorios" className='text-gray-800'>Cantidad de dormitorios: </label>
                <input type="number" name='cdormitorios' />
                <label htmlFor="cbaños" className='text-gray-800'>Cantidad de baños: </label>
                <input type="number" name='cbaños' />
                <label htmlFor="ppdia" className='text-gray-800'>Precio por dia: </label>
                <input type="number" name='ppdia' />
                <label htmlFor="valoracion" className='text-gray-800'>Valoracion: </label>
                <input type="number" name='valoracion' />
                <div className='flex w-100 mt-12'>
                    <input type="submit" value="Agregar" className='w-1/2 bg-transparent hover:bg-[#CDFADB] text-gray-700 font-semibold hover:text-gray-800 py-2 px-6 border border-gray-700 hover:border-none text-xl border-opacity-50 rounded text-opacity-80 mr-12' />
                    <input type="reset" value="Cancelar" className='w-1/2 bg-transparent hover:bg-[#CDFADB] text-gray-700 font-semibold hover:text-gray-800 py-2 px-6 border border-gray-700 hover:border-none text-xl border-opacity-50 rounded text-opacity-80' />
                </div>
            </form>
        </div>
    </>
}

export default CrudForm