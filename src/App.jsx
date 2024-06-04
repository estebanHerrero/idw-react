import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Inicio } from './pages/Inicio';
import { Institucional } from './pages/Institucional';
import { Contacto } from "./pages/Contacto";
import { Header } from './components/Header';
import { SearchBar } from "./components/SearchBar";
import { Footer } from "./components/Footer";




function App() {


  return (
    <div className="App">
      <Header />
      <SearchBar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Institucional" element={<Institucional />} />      
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
