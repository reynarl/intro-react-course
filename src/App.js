import React, {useState} from 'react';

import Headers from "./components/Headers";
import ClientForm from './components/ClientForm';


function App() {
  //agregamos el estado desde el padre (acá) para que los valores puedan comunicarse con los diferentes componentes que tenemos
  const [cantidad, guardarCantidad] = useState(0)
  const [plazo, guardarPlazo] = useState('')
  const [cargando, guardarCargando] = useState(false)

  return (
    <div className="App">
      < Headers
        subtitle = 'Holi'
        description = 'Agregando props'
        //pasamos el valor cantidad a otro componente
        cantidad = {cantidad}
      />

      <div className='containerForm'>
        <ClientForm 
          cantidad = {cantidad}
          guardarCantidad = {guardarCantidad}
          plazo = {plazo}
          guardarPlazo = {guardarPlazo}
          cargando = {cargando}
          guardarCargando = {guardarCargando}
          />
      </div>
    </div>
  );
}

export default App;
