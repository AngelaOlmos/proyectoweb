import React from "react";

const ProgramasYEventos = () => {
  const programasYEventosData = [
    {
      id: 1,
      nombre: "CONCIERTO EN VIVO",
      fecha: "2023-08-15",
      lugar: "Teatro Principal",
      imagen: "im3.png",
    },
    {
      id: 2,
      nombre: "EXPOSICION DE ARTE",
      fecha: "2023-09-05",
      lugar: "Galería de Arte",
      imagen: "im7.png", 
    },
  ];

  return (
    <div>
      
      <ul>
        {programasYEventosData.map((evento) => (
          <li key={evento.id}>
            <h2>{evento.nombre}</h2>
            <img src={evento.imagen} alt={evento.nombre} style={{ maxWidth: "100%" }} />
            <p>Fecha: {evento.fecha}</p>
            <p>Lugar: {evento.lugar}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProgramasYEventos;