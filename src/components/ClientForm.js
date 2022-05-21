import React from 'react';

const ClientForm = () => {
  return ( 
    <form className='clientForm'>
      <div className='row'>
        <div>
          <label>Cantidad de préstamo </label>
          <input className='' type='number' placeholder='Ejemplo: 3000'></input>
        </div>
        <div>
          <label>Plazo para pagar</label>
          <select className='u-full-width'>
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
    </form>
   );
}
 
export default ClientForm;