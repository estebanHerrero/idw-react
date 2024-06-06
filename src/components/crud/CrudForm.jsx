import React, { useState } from 'react'

const CrudForm = ({ addAlojamiento }) => {

    const [formData, setFormData] = useState({
        alojamiento: '',
        tipo: '',
        descripcion: '',
        cdormitorios: '',
        cbaños: '',
        ppdia: '',
        valoracion: ''
    })


    const handleSubmit = (e) => {
        e.preventDefault();
        addAlojamiento(formData)
        setFormData({
            alojamiento: '',
            tipo: '',
            descripcion: '',
            cdormitorios: '',
            cbaños: '',
            ppdia: '',
            valoracion: ''
        })
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

  return   <>
        <div className='flex justify-center'>
            <form className='grid grid-cols-1 w-[500px]' onSubmit={handleSubmit}> 
                <label htmlFor="alojamiento" className='text-gray-800'>Nombre: </label>
                <input type="text" name='alojamiento' onChange={handleChange} value={formData.nombre}  />
                <label htmlFor="tipo" className='text-gray-800'>Tipo: </label>
                <input type="text" name='tipo' onChange={handleChange} />
                <label htmlFor="descripcion" className='text-gray-800'>Descripcion: </label>
                <input type="text" name='descripcion' onChange={handleChange} />
                <label htmlFor="cdormitorios" className='text-gray-800'>Cantidad de dormitorios: </label>
                <input type="number" name='cdormitorios' onChange={handleChange} />
                <label htmlFor="cbaños" className='text-gray-800'>Cantidad de baños: </label>
                <input type="number" name='cbaños' onChange={handleChange} />
                <label htmlFor="ppdia" className='text-gray-800'>Precio por dia: </label>
                <input type="number" name='ppdia' onChange={handleChange} />
                <label htmlFor="valoracion" className='text-gray-800'>Valoracion: </label>
                <input type="number" name='valoracion' onChange={handleChange} />
                <div className='flex w-100 mt-12'>
                    <input type="submit" value="Agregar" className='w-1/2 bg-transparent hover:bg-[#CDFADB] text-gray-700 font-semibold hover:text-gray-800 py-2 px-6 border border-gray-700 hover:border-none text-xl border-opacity-50 rounded text-opacity-80 mr-12' />
                    <input type="reset" value="Cancelar" className='w-1/2 bg-transparent hover:bg-red-500 text-gray-700 font-semibold hover:text-gray-800 py-2 px-6 border border-gray-700 hover:border-red-500 text-xl border-opacity-50 rounded text-opacity-80' />
                </div>
            </form>
        </div>
    </>
}

export default CrudForm