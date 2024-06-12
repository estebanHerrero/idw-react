import React, { useEffect, useState } from 'react'

const CrudForm = ({ addAlojamiento, editAlojamiento, editData }) => {

    const [formData, setFormData] = useState({
        id: null,
        alojamiento: '',
        tipo: '',
        descripcion: '',
        cdormitorios: '',
        cbaños: '',
        ppdia: '',
        valoracion: ''
    })


    useEffect(() => {
        if (editData != null) {
            setFormData(editData)
        } else { 
            setFormData ({
                id: null,
                alojamiento: '',
                tipo: '',
                descripcion: '',
                cdormitorios: '',
                cbaños: '',
                ppdia: '',
                valoracion: ''        
            })
        }
    }, [editData])

    

    const handleSubmit = (e) => {
        e.preventDefault(); // Para evitar que se recargue la pagina
        
        if (formData.alojamiento != '' && formData.tipo != '' && formData.descripcion != '')
            if ( editData != null) {
                editAlojamiento(formData)
            } else { 
                formData.id = Date.now()
                addAlojamiento(formData)
                setFormData({
                id: null,
                alojamiento: '',
                tipo: '',
                descripcion: '',
                cdormitorios: '',
                cbaños: '',
                ppdia: '',
                valoracion: ''
            })
        } else {
            alert("Por favor ingrese los datos.")
        }
    }

    // actualiza la variable de estado, se ejecuta cada vez que ingresa datos en el input
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
                <input type="text" name='alojamiento' onChange={handleChange} value={formData.alojamiento}  />
                <label htmlFor="tipo" className='text-gray-800'>Tipo: </label>
                <input type="text" name='tipo' onChange={handleChange} value={formData.tipo} />
                <label htmlFor="descripcion" className='text-gray-800'>Descripcion: </label>
                <input type="text" name='descripcion' onChange={handleChange} value={formData.descripcion} />
                <label htmlFor="cdormitorios" className='text-gray-800'>Cantidad de dormitorios: </label>
                <input type="number" name='cdormitorios' onChange={handleChange} value={formData.cdormitorios} />
                <label htmlFor="cbaños" className='text-gray-800'>Cantidad de baños: </label>
                <input type="number" name='cbaños' onChange={handleChange} value={formData.cbaños} />
                <label htmlFor="ppdia" className='text-gray-800'>Precio por dia: </label>
                <input type="number" name='ppdia' onChange={handleChange} value={formData.ppdia} />
                <label htmlFor="valoracion" className='text-gray-800'>Valoracion: </label>
                <input type="number" name='valoracion' onChange={handleChange} value={formData.valoracion} />
                <div className='flex w-100 mt-12'>
                    <input type="submit" className='w-1/2 bg-transparent hover:bg-[#CDFADB] text-gray-700 font-semibold hover:text-gray-800 py-2 px-6 border border-gray-700 hover:border-none text-xl border-opacity-50 rounded text-opacity-80 mr-12' />PlY Store
                    <input type="reset" className='w-1/2 bg-transparent hover:bg-red-500 text-gray-700 font-semibold hover:text-gray-800 py-2 px-6 border border-gray-700 hover:border-red-500 text-xl border-opacity-50 rounded text-opacity-80' />
                </div>
            </form>
        </div>
    </>
}

export default CrudForm