import React, { useState } from 'react';
import CrudForm from './crud/CrudForm';
import CrudTable from './crud/CrudTable';


const baseDatos = [
    {alojamiento: 'Kimpton Fitroy', tipo: 'Hotel', descripcion: 'Atracciones cerca, buen desayuno', cdormitorios: 2, cbaños: 1, ppdia: 180, valoracion: 9.1},
    {alojamiento: 'nHow', tipo: 'Hotel', descripcion: 'Staff amigable, delicias culinarias', cdormitorios: 3, cbaños: 1, ppdia: 180, valoracion: 9.2},
    {alojamiento: 'Kip', tipo: 'Hotel', descripcion: 'Atracciones cerca, opcion de catering', cdormitorios: 2, cbaños: 1, ppdia: 180, valoracion: 8.2},
]


const CrudAPI = () => {

    const [alojamientos, setAlojamientos] = useState(baseDatos);


    const addAlojamiento = (alojamiento) => {
        setAlojamientos([
            ...alojamientos,
            alojamiento
        ])
    }

    return <>
            <div>
                <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">CRUD de Alojamientos</h1>
                <CrudForm addAlojamiento={addAlojamiento} />  
                <CrudTable alojamientos={alojamientos} /> 
            </div>
        </>
    }

export default CrudAPI