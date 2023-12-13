import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; 

const Participe = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Anímate a participar de los talleres de danza!!</h1>

      <div className="row mt-4">
        <div className="col-md-6">
          <p>
            Anímate y no pierdas esta oportunidad de divertirte :)
          </p>
          <botton to="/about" className="btn btn-primary">
            Inscríbete
          </botton>
        </div>

        <div className="col-md-6">
          <img
            src="im3.png"
            alt="Imagen de ejemplo"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default Participe;
