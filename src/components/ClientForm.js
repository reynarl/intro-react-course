import React, {useState} from 'react';

import Spinner from './Spinner'

const ClientForm = (props) => {
  //en lugar de poner todas las variables dentro de la funcion clientForm({}), solo paso props y luego declaro
  const {cantidad, guardarCantidad, plazo, guardarPlazo, guardarCargando} = props  
  const [error, guardarError] = useState(false)

  const calcular = e =>{
    e.preventDefault()

    if(cantidad === 0 || plazo === ''){
      guardarError(true)
      //para que no se ejecute la siguiente línea
      return
    }
    guardarError(false)
    //habilitar spinner
    guardarCargando(true)
    setTimeout(() => {
      //después de 3 seg. se deshabilita
      guardarCargando(false)
    }, 3000)
  }

  return ( 
    //usamos onSubmit en el form y pasamos el nombre de la función que se ejecutará al hacer click sobre el botón
    <form onSubmit={calcular} className='clientForm'>
      {/* {cantidad} */}
      {/* {plazo} */}
      <div className='row'>
        <div>
          <label>Cantidad de préstamo </label>
          <input 
          type='number' 
          placeholder='Ejemplo: 3000'
          //leemos y guardamos los valores agregados en la variable 'guardarCantidad' - usamos onChange
          onChange={ e => guardarCantidad(parseInt(e.target.value))}/>
          
        </div>
        <div>
          <label>Plazo para pagar</label>
          <select onChange={ e => guardarPlazo(parseInt(e.target.value))}>
            <option>Seleccionar</option>
            <option value='3'>3 meses</option>
            <option value='6'>6 meses</option>
            <option value='12'>12 meses</option>
            <option value='24'>24 meses</option>
          </select>
        </div>
        <div className='btnContain'>
          <input className='formBtn' type='submit' value='Calcular'></input>
        </div>
      </div>
      {/* si no queremos poner nada, ponemos null */}
      {error? <p className='error'>Todos los campos son obligatorios</p> : null}
    </form>
   );
}
 
export default ClientForm;