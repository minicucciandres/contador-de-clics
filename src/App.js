
import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import freeCodeCampoLogo from './imagenes/freecodecamp-logo.png'
import { useState } from 'react';

function App() {
  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);

  };

  const reiniciarContador = () => {
    setNumClics(0);
  }



  return (
    <div className="app">
      <div className='freecodecamp-logo-contenedor'>
        <img
          className='freecodecamp-logo'
          src={freeCodeCampoLogo}
          alt='logo de free code camp'

        />
      </div>
      <div className='conetenedor-principal'>
        <Contador numClics={numClics} />

        <Boton
          texto='Clic'
          esBtonDeClic={true}
          manejarClic={manejarClic}
        />

        <Boton
          texto='Reiniciar'
          esBtonDeClic={false}
          manejarClic={reiniciarContador}

        />

      </div>
    </div>
  );
}

export default App;
