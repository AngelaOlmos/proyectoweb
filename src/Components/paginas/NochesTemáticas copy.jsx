import React from "react";
import './hoja.css';
const NochesTemáticas =()=>{
    
    return(
        <div class="galeria">
        <h1>NOCHES TEMÁTICAS DEL CENTRO CULTURAL</h1>
        <div class="linea"></div>
        <div class="contenedor-imagenes">
            <div class="imagen">
            <img src="im1.png" alt=""/>
                <div class="overlay">
                    <h2>Teatro</h2>
                </div>
            </div>
            <div class="imagen">
            <img src="im2.png" alt=""/>
                <div class="overlay">
                    <h2>Fiestas</h2>
                </div>
            </div>
           
            
        </div>
    </div>
    )
}
export default NochesTemáticas;