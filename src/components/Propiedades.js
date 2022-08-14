import React from "react";
import  PropTypes  from "prop-types";


export default function Propiedades(props){
    return(
        <div>
           <h2>{props.porDefecto}</h2> 
           <ul>
            <li>{props.cadena}</li>
            <li>{props.number}</li>
            <li>{props.elementReact}</li>
            <li>{props.object.nombre + " - " + props.object.correo}</li>
            <li>{props.array.join(" , ")}</li>
            <li>{props.boolean ? "Verdadero": "falso"}</li>
            <li>{props.array.map(props.function).join(" , ")}</li>
            <li>{props.componentReact}</li>
           </ul>
        </div>
    );

}

Propiedades.defaultProps ={
    porDefecto: "las props"
}

Propiedades.propTypes ={
 number: PropTypes.number.isRequired
};