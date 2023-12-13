import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import './app.css';

const PageIndicator = () => {
  const location = useLocation();

  return (
    <p className="text-muted">
      Estás actualmente en la ruta: {location.pathname}
    </p>
  );
};


const Navbar = ()=>{
    return(
        <div>
           
           <NavLink className="navbar navbar-expand-lg bg-light shadow-sm">
        <div className="container-fluid">
          <Link to="/">
            <img src='./flor.png' width='80' className="rounded-circle" alt="Logo" />
          </Link>
          <Link className="navbar-brand" to='/'></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">

      <ul className="navbar-nav mx-auto">
       
        <li className="nav-item">
          <Link className="nav-link " to ='/'>Inicio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/noticias'>Noticias</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to ='/acercaDeNosotros'>Acerca de Nosotros</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to ='/instalaciones'>Instalaciones</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/nochesTemáticas'>Noches Temáticas</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to ='/participe'>Participe</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/programasYEventos'>Programas y Eventos</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to ='/recursosCulturales'>Recursos Culturales</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/redesSociales'>Redes Sociales</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/contactos'>Contactos</Link>
        </li>
        
      </ul>
    </div>
  </div>
</NavLink>
        </div>
    )
}
export default Navbar;