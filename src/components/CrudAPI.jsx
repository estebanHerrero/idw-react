import React, { useState, useEffect } from 'react';
import CrudForm from './crud/CrudForm';
import CrudTable from './crud/CrudTable';
import { helpFetch } from '../helpers/helpFetch';




const CrudAPI = () => {

   const API = helpFetch() 
   const [editData, setEditData] = useState(null);
   const [alojamientos, setAlojamientos] = useState([]);

   console.log(API);

    useEffect(() => {
        API.get("alojamientos").then((response) => {
            if (!response.error) setAlojamientos(response)
        })
    }, [])
        

    const addAlojamiento = (alojamiento) => {
        const options = {
            body: alojamiento
        }

        API. post("alojamientos", options).then(response => {
            if (!response.erreor) setAlojamientos([...alojamientos, alojamiento])
        })
    }

    const editAlojamiento = (alojamiento) => {}

    const deleteAlojamiento = id => {}

    return <>
            <div>
                <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">CRUD de Alojamientos</h1>
                <CrudForm addAlojamiento={addAlojamiento} editAlojamiento={editAlojamiento} editData={editData} />  
                <CrudTable alojamientos={alojamientos} deleteAlojamiento={deleteAlojamiento} setEditData={setEditData} /> 
            </div>
        </>
    }

export default CrudAPI