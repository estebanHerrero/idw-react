import React from 'react'

const CrudTable = () => {
  return <>
    <h5 className="text-2xl font-bold text-gray-800 mb-8 mt-12">Alojamientos actuales</h5>
    <table className='border-2 w-[1200px] text-center'>
        <tr className='bg-[#CDFADB]'>
            <td>Nombre</td>
            <td>Tipo</td>
            <td>Descripcion</td>
            <td>Cantidad de dormitorios</td>
            <td>Cantidad de baños</td>
            <td>Precio por dia</td>
            <td>Valoracion</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>
              <button>Actualizar</button>
              <button>Eliminar</button>
          </td>
        </tr>
    </table>
  </>
}

export default CrudTable