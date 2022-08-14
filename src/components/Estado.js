import React, {Component} from "react";

function EstadoAHijo(porps){
    return(
        <div>
            <h3>{porps.contadorHijo}</h3>
        </div>
    );

}


export default class Estado extends Component {
    constructor(props){
        super(props);
        this.state ={
            contador: 0,
        };
        // setInterval(()=> {
        //     this.setState({
        //         contador:this.state.contador +1,
        //     });
        // },1000);
    }
    render(){
        return(
            <div>
                <h2>The state</h2>
                <p>{this.state.contador}</p>
                <EstadoAHijo contadorHijo={this.state.contador}></EstadoAHijo>
            </div>
        );
    }
}