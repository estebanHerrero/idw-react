import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { Inicio } from './pages/Inicio';
import { Institucional } from './pages/Institucional';
import { Contacto } from "./pages/Contacto";
import { Header } from './components/Header';


function App() {


  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Institucional" element={<Institucional />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
   
    </div>
  ); 
}

export default App;
