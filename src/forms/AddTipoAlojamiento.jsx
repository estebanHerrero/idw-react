import React, { useState } from 'react'

export default function AddTipoAlojamiento() {

  const [descripcion, setDescripcion]
 = useState('');

  const enviar = async (e) => {
    e.preventDefault();
    const json = {
      Descripcion: descripcion
    };
    try {
      const respose = await fetch('http://localhost:3001//tiposAlojamiento/createTipoAlojamiento', {
        method: 'post',
        header: {
          'Content-type': 'application/json',
        },
          body: JSON.stringify(json),
      });
      if (respose.ok) {
        alert('Se creo correctamente el alojamiento tipo');
      }else {
        alert('Error al crear el alojamiento tipo');
      }
    } catch (error){
        console.error('Error:', error);
        alert('Error no pudo establecer el servicio');
    }
  }  

  return (
    <div className='m-auto p-5 bg-[#FF8080] border rounded-lg shadow'>
      <h1>Alta tipo de alojamiento</h1>
      <form onSubmit={enviar}>
        <div>
          <label htmlFor="descripcion">Descripcion:</label>
          <input 
            type='text'
            id='descripcion'
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </div>
        <button type='submit'>Enviar</button>
      </form>
    </div>
  )
}
