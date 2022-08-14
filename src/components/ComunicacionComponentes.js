import React, { Component } from "react";


export default class Padre extends Component{
    state= {
        contador :0,
    }

    incrementarContador =(e)=>{
        this.setState({
            contador:this.state.contador + 1,
        })
    }
    render(){
        return(
            <>
            <h2>Comunicacion entre componentes</h2>
            <Hijo mensaje ="Mensaje de hijo"></Hijo>
            <Hijo incrementarContador={this.incrementarContador} mensaje ="Mensaje de hijo2"></Hijo>
            </>
        )
        }
}

function Hijo(props){
    return (
    <>
    
    <h3>{props.mensaje}</h3>
    <button onClick={props.incrementarContador}>+</button>
    </>
    )
}