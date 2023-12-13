import React from "react";

const RecursosCulturales = () => {
  const recursosCulturalesData = [
    {
      id: 1,
      titulo: "Libros en línea",
      descripcion: "Descubre nuestra colección digital de libros en diversas áreas culturales.",
      enlace: "https://elcomercio.pe/eldominical/entrevista/dia-del-libro-perubookstore-la-libreria-online-peruana-que-cumple-18-anos-y-es-pionera-en-la-venta-de-e-books-daniel-hurtado-brenner-noticia/",
      imagen: "libros.png",
    },
    {
      id: 2,
      titulo: "Galería de Arte Virtual",
      descripcion: "Explora obras de artistas locales e internacionales desde la comodidad de tu hogar.",
      enlace: "https://lapatria.bo/2020/04/19/galeria-virtual-muestra-el-talento-local-en-tiempo-de-coronavirus/",
      imagen: "arte.png",
    },
  ];

  return (
    <div>
      
      <ul>
        {recursosCulturalesData.map((recurso) => (
          <li key={recurso.id}>
            <h2>{recurso.titulo}</h2>
            <img src={recurso.imagen} alt={recurso.titulo} style={{ maxWidth: "100%" }} />
            <p>{recurso.descripcion}</p>
            <a href={recurso.enlace} target="_blank" rel="noopener noreferrer">
              Ir al recurso
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecursosCulturales;
