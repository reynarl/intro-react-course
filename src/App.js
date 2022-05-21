import React from 'react';
import Headers from "./components/Headers";
import ClientForm from './components/ClientForm';

function App() {
  return (
    <div className="App">
      < Headers
        subtitle = 'Holi'
        description = 'Agregando props'
      />

      <div className='containerForm'>
        <ClientForm />
      </div>
    </div>
  );
}

export default App;
