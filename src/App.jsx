import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Inicio } from "./pages/Inicio";
import { Institucional } from "./pages/Institucional";
import { Contacto } from "./pages/Contacto";
import { Header } from "./components/Header";
import { SearchBar } from "./components/SearchBar";
import { Footer } from "./components/Footer";
import { Alojamiento } from "./pages/Alojamiento";

const App = () => {
  const [data, setData] = useState([]); // Datos originales
  const [filteredData, setFilteredData] = useState([]); // Datos filtrados

  const handleSearch = (searchTerm) => {
    const results = data.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(results);
  };

  return (
    <div className="App">
      <Header />
      <SearchBar onSearch={handleSearch} />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Institucional" element={<Institucional />} />
        <Route
          path="/alojamiento"
          element={<Alojamiento searchResults={filteredData} />} // Cambio aquí
        />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
