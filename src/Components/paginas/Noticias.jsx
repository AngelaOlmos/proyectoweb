import React from "react";

const NochesTemáticas =()=>{
    
    return(
        <div class="galeria">
        <h1>NOCHES TEMÁTICAS DEL CENTRO CULTURAL</h1>
        <div class="linea"></div>
        <div class="contenedor-imagenes">
            <div class="imagen">
            <img src="im1.png" alt=""/>
                <div class="overlay">
                    <h2>id: 1,
      titulo: "Nueva Exposición en la Galería de Arte",
     
      contenido: "Descubre las increíbles obras de artistas locales en nuestra última exposición.",
      </h2>
                </div>
            </div>
            <div class="imagen">
            <img src="im2.png" alt=""/>
                <div class="overlay">
                    <h2> id: 2,
      titulo: "Lanzamiento del Libro 'Historias Culturales'",
      
      contenido: "Explora narrativas culturales fascinantes a través de este nuevo libro disponible ahora.",
      </h2>
                </div>
            </div>
            
            
        </div>
    </div>
    )
}
export default NochesTemáticas;