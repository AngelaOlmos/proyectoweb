

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap
import { Carousel } from "react-bootstrap";

const Inicio = () => {
  return (
    <div className="container mt-5">
      <p className="text-center mb-4">Bienvenidosal Centro Cultural florece, un espacio vibrante donde convergen la creatividad, la diversidad y el aprendizaje. En nuestro centro, buscamos ser el epicentro de expresiones artísticas, culturales y educativas que enriquecen y fortalecen nuestra comunidad.

Sumérgete en un ambiente que celebra la pluralidad de perspectivas, donde cada expresión artística encuentra su lugar y cada voz tiene la oportunidad de resonar. Nuestra misión es fomentar el diálogo intercultural, promover el entendimiento mutuo y cultivar un sentido de pertenencia.

Desde exposiciones artísticas hasta eventos educativos, pasando por presentaciones musicales y actividades participativas, el Centro Cultural [Nombre] es un faro de inspiración y aprendizaje para todas las edades. Nos esforzamos por ser un punto de encuentro donde las artes y la cultura se entrelazan para crear experiencias significativas y duraderas.

Te invitamos a explorar, aprender y compartir en el Centro Cultural florece, donde la diversidad es celebrada y cada visita es una oportunidad para descubrir algo nuevo. Únete a nosotros en este viaje de descubrimiento cultural y contribuye a la creación de un tejido cultural vibrante y en constante evolución. ¡Bienvenidos a nuestro espacio, donde la cultura cobra vida</p>

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="im1.png"
            alt="Primer slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="im2.png"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="im7.png"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Inicio;