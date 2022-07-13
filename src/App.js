import './App.css';
import freecodecampLogo from './imagenes/FreeCodeCamp_logo.svg.png';
import Boton from './componentes/boton.js';
import Contador from './componentes/contador.js';
import {useState} from 'react'; //hook que permite agregar un estado a un componente 

function App() {

  const [numeroClics, setNumClics] = useState(0);

  const manejarClic = () =>{
    setNumClics (numeroClics + 1);
  }

  const reiniciar = () =>{
    setNumClics (0);
  }

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img 
        className="freecodecamp-logo"
        src={`${freecodecampLogo}`} 
        alt="Logo de freecodecamps" />
      </div>
      <div className="contenedor-principal">
        <Contador 
          numeroClics={numeroClics}
        />
        <Boton
          texto='Clic'
          esBotonDeClic={true} 
          manejarClic={manejarClic}
        />
        <Boton
          texto='Reiniciar'
          esBotonDeClic={false} 
          manejarClic={reiniciar}
        />
      </div>
    </div>
  );
}

export default App;
