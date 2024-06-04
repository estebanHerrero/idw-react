import React, { useState } from 'react';


const CardAlojamiento = ({ alojamientos }) => {
    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
        setShowDetails(IshowDetails);
    };

    return (
        <div>
            <div>
                <img src={alojamiento.imagen} alt={alojamiento.titulo} />
                {showDetails && (
                <div>
                    <div>
                        <ul>
                            {alojamiento.descripcion}
                        </ul>
                    </div>
                </div>
            )}
            <button onClick={toggleDetails}>
                {showDetails ? "-" : "+"}
            </button>
            </div>
            <h3>{alojamiento.titulo}</h3>
            <ul>
                <li>Ubicacion: {alojamiento.ubicacion}</li>
                <li>Precio por dia: {alojamiento.precioPorDia}</li>
                <li>Cantidad de dormitorios: {alojamiento.dormitorios}</li>
                <li>Cantidad de baños: {alojamiento.baños}</li>
                <li>Estado: {alojamiento.estado}</li>
            </ul>
        </div>
    );
};