import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faEarthAmericas,
  faSearch,
  faBed,
} from "@fortawesome/free-solid-svg-icons";

export function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    console.log("Search term:", searchTerm);
    onSearch(searchTerm);
  };

  return (
    <div className="bg-[#F6FDC3] px-4 py-6 flex justify-center">
      <div className="bg-[#CDFADB] px-4 py-2 flex items-center justify-between w-[1000px] rounded-xl">
        {/* Sección 1: Donde queres ir? */}
        <div className="flex-shrink-0 bg-[#FFCF96] p-2 px-8 rounded">
          <input
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            placeholder="¿Dónde quieres ir?"
            className="text-gray-700 font-light"
          />
          <FontAwesomeIcon
            icon={faEarthAmericas}
            className="text-gray-500 ml-2"
          />
        </div>

        {/* Sección 2: Fechas */}
        <div className="flex-shrink-0 bg-[#FFCF96] p-2 px-8 rounded">
          <span className="text-gray-700 font-light">
            19 Abril Vier -- 26 Abril Vie
          </span>
          <FontAwesomeIcon
            icon={faCalendarAlt}
            className="text-gray-500 ml-4"
          />
        </div>

        {/* Sección 3: Personas y Habitaciones */}
        <div className="flex-shrink-0 bg-[#FFCF96] p-2 px-8 rounded">
          <span className="text-gray-700 font-light">
            1 Adulto - 1 Niño - 2 Dor
          </span>
          <FontAwesomeIcon icon={faBed} className="text-gray-500 ml-4" />
        </div>

        {/* Sección 4: Buscar */}
        <button
          onClick={handleSearch}
          className="bg-[#FF8080] text-gray-700 font-light px-6 py-2 rounded"
        >
          Buscar{" "}
          <FontAwesomeIcon icon={faSearch} className="text-gray-500 ml-4" />
        </button>
      </div>
    </div>
  );
}
