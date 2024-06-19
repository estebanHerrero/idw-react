import React, { useState, useEffect } from 'react';
import CrudForm from './crud/CrudForm';
import CrudTable from './crud/CrudTable';
import { helpFetch } from '../helpers/helpFetch';



const CrudAPI = () => {

    const API = helpFetch()
    const [editData, setEditData] = useState(null);
    const [alojamientos, setAlojamientos] = useState([]);


    useEffect(() => {
        API.get("alojamientos").then((response) => {
            if (!response.error) setAlojamientos(response)
        })
    }, [])
        
    //agregar alojamientos
    const addAlojamiento = (alojamiento) => {
        const options = {
            body: alojamiento
        } 

        API.post("alojamientos" , options).then(response => {
            if (!response.error) setAlojamientos([...alojamientos, alojamiento])
        })
    }

    const editAlojamiento = (alojamiento) => {
        const options = {
            body: alojamiento
        }

        API.put("alojamientos", options).then(response => {
            if (!response.error) {
                const newAlojamientos = alojamientos.map(el => el.id = 
                alojamiento.id ? alojamiento : el)
                setAlojamientos(newAlojamientos)
                setEditData(null)
            }
        })
    }


    const deleteAlojamiento = id => {
        const isDelete = window.confirm(`¿Desea eliminar el registro conid: ${id}?`)

        if (isDelete) {
            API.del("alojamientos", id).then(response => {
                if (!response.error) {
                    const newAlojamientos = alojamientos.filter(el => el.id != id)
                    setAlojamientos(newAlojamientos);
                }
            })
        }
    }

    return <>
            <div>
                <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">CRUD de Alojamientos</h1>
                <CrudForm addAlojamiento={addAlojamiento} editAlojamiento={editAlojamiento} editData={editData} />  
                <CrudTable alojamientos={alojamientos} deleteAlojamiento={deleteAlojamiento} setEditData={setEditData} /> 
            </div>
        </>
    }

export default CrudAPI