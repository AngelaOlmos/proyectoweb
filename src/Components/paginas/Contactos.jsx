import React from 'react';
import './hoja1.css';
const Contactos = () => {
  return (
    <div className="container-form">
      <div className="info-form">
        <h2>Contáctanos</h2>
        <div class="linea"></div>
        <p>
         Llena tus datos si tienes algún reclamo, sugerencia o felicitación y puedes hacerla llegar llenando el pequeño formulario MUCHAS GRACIAS! :)
        </p>
        <a href="#"><i className="fa fa-phone"></i> 123-456-789</a>
        <a href="#"><i className="fa fa-envelope"></i> cultural@centrocultural.com</a>
        <a href="#"><i className="fa fa-map-marked"></i> La Paz, Bolivia</a>
      </div>
      <form action="#" autoComplete="off">
        <input type="text" name="nombre" placeholder="Tu Nombre" className="campo" />
        <input type="email" name="email" placeholder="Tu Email" className="campo" />
        <textarea name="mensaje" placeholder="Tu Mensaje..."></textarea>
        <input type="submit" name="enviar" value="Enviar Mensaje" className="btn-enviar" />
      </form>
    </div>
  );
};

export default Contactos;