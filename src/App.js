import logo from './logo.svg';
import './App.css';
import Componente from './components/Componente';
import Propiedades from './components/Propiedades';
import Estado from './components/Estado';
import RenderizadoCondicional from './components/RenderizadoCondicional';
import RenderizadoElementos from './components/RenderizadoElementos';
import {EventosES6, EventosES7} from "./components/Eventos"
import Padre from './components/ComunicacionComponentes';
import AjaxApi from './components/AjaxApi';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <section>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"

          rel="noopener noreferrer"
        >
          Learn React
        </a>
        </section>
        <section>
        <Componente msg= "Hola soy un componente Funcional const"></Componente>
        <hr />
        <Propiedades 
        cadena="Esto es una acadena de texto"
        number ={19} 
        boolean = {true} 
        array ={[1,2,3]}
        object = {{nombre:"jose", correo:"josevargasmas@gmail.com"}}
        elementReact = {<i>Esto es un elemento react</i>} 
        function = {(num) => num * num}
        componentReact= {<Componente msg="Soy un componente pasado como prop" />}></Propiedades>
        <br />
        <br />
        <br />
        <br />
        <hr />
        <Estado></Estado>

        <hr />
        <RenderizadoCondicional></RenderizadoCondicional>
        <hr />
        <RenderizadoElementos></RenderizadoElementos>
        <hr />
        <EventosES6></EventosES6>
        <hr />
        <EventosES7></EventosES7>
        <hr />
        <Padre></Padre>
        <hr />
        <AjaxApi></AjaxApi>
      </section>
      </header>
    
    </div>
  );
}

export default App;
