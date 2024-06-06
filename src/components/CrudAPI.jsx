import React from 'react';
import CrudForm from './crud/CrudForm';
import CrudTable from './crud/CrudTable';



const CrudAPI = () => {



return <>
        <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">CRUD de Alojamientos</h1>
            <CrudForm />  
            <CrudTable  /> 
        </div>
    </>
}

export default CrudAPI