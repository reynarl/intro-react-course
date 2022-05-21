import React from 'react';

//1era Forma
// export default function Headers({subtitle, description}){
//   return(
//     <>
//     <h1>Soy un componente</h1>
//     <h2>{subtitle}</h2>
//     <p>{description}</p>
//     </>
//   )
// }

//2da Forma
const Headers = ({subtitle, description}) => (
    <div>
      <h1>Soy un componente</h1>
      <h2>{subtitle}</h2>
      <p>{description}</p>
    </div>
)
 
export default Headers;
