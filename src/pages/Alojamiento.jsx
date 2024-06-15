import React from "react";
import CrudAPI from "../components/CrudAPI";

export const Alojamiento = ({ searchResults }) => {
  return (
    <div className="bg-[#F6FDC3] mx-auto px-20 py-16">
      {searchResults.length > 0 ? (
        <ul>
          {searchResults.map((alojamiento, index) => (
            <li key={index}>{alojamiento.nombre}</li>
          ))}
        </ul>
      ) : (
        <CrudAPI />
      )}
    </div>
  );
};
