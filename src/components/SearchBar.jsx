import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faEarthAmericas,
  faSearch,
  faBed,
} from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearchClick = () => {
    onSearch(query);
  };

  return (
    <div className="bg-[#F6FDC3] px-4 py-6 flex justify-center">
      <div className="bg-[#CDFADB] px-4 py-2 flex items-center justify-between w-[1000px] rounded-xl">
        {/* Sección 1: Donde queres ir? */}
        <div className="flex-shrink-0 bg-[#FFCF96] p-2 px-8 rounded">
          <span className="text-gray-700 font-light">¿Dónde quieres ir?</span>
          <FontAwesomeIcon
            icon={faEarthAmericas}
            className="text-gray-500 ml-2"
          />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="ml-2 p-1"
            placeholder="Busca tu destino."
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
          className="bg-[#FF8080] text-gray-700 font-light px-6 py-2 rounded"
          onClick={handleSearchClick}
        >
          Buscar{" "}
          <FontAwesomeIcon icon={faSearch} className="text-gray-500 ml-4" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
