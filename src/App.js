import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/navegacion/navbar'
import Inicio from './Components/paginas/Inicio'
import Noticias from './Components/paginas/Noticias';
import AcercaDeNosotros from './Components/paginas/AcercaDeNosotros';
import Contactos from './Components/paginas/Contactos';
import Instalaciones from './Components/paginas/Instalaciones';
import NochesTemáticas from './Components/paginas/NochesTemáticas';
import Participe from './Components/paginas/Participe';
import ProgramasYEventos from './Components/paginas/ProgramasYEventos';
import RecursosCulturales from './Components/paginas/RecursosCulturales';
import RedesSociales from './Components/paginas/RedesSociales';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        
        <Routes className="r">
          <Route path="/" element={<Inicio />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/acercaDeNosotros" element={<AcercaDeNosotros />} />
          <Route path="/contactos" element={<Contactos />} />
          <Route path="/instalaciones" element={<Instalaciones />} />
          <Route path="/nochesTemáticas" element={<NochesTemáticas />} />
          <Route path="/participe" element={<Participe />} />
          <Route path="/programasYEventos" element={<ProgramasYEventos />} />
          <Route path="/recursosCulturales" element={<RecursosCulturales />} />
          <Route path="/redesSociales" element={<RedesSociales />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;