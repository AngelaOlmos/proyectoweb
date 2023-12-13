import React from "react";
import { Link } from "react-router-dom";
import './hoja.css';

const Instalaciones = () => {
  return (
    <div className="galeria">
      <h1>VISITA LAS INSTALACIONES, DEPENDE A LA ACTIVIDAD QUE GUSTE</h1>
      <div className="linea"></div>
      <div className="contenedor-imagenes">
        <Link to="https://www.paginasiete.bo/letra-siete/la-poetica-teatral-e-investigacion-en-bolivia-intersecciones-DA6376885" className="imagen">
          <img src="im10.png" alt="" />
          <div className="overlay">
            <h2>Teatro</h2>
          </div>
        </Link>
        <Link to="https://www.boliviaentusmanos.com/turismo/atractivos/el-centro-de-la-cultura-plurinacional.html" className="imagen">
          <img src="im11.png" alt="" />
          <div className="overlay">
            <h2>Fiestas</h2>
          </div>
        </Link>
        <Link to="https://www.minculturas.gob.bo/el-ministerio-de-culturas-festeja-el-dia-de-la-morenada-con-el-matracazo-consolidando-la-danza-tradicional-de-bolivia/" className="imagen">
          <img src="im12.png" alt="" />
          <div className="overlay">
            <h2>Bailes</h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Instalaciones;
