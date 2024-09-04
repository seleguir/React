import React, { useState } from 'react';

// 3- Contador
function Contador() {

    // Definir el estado para el valor del contador
    const [contador, setContador] = useState(0);
  
    // Función para incrementar el valor del contador
    const incrementar = () => {
      setContador(contador + 1);
    };
  
    // Función para decrementar el valor del contador
    const decrementar = () => {
      setContador(contador - 1);
    };
  
    return (
      <div>
        <h2>Contador: {contador}</h2>
        <button onClick={incrementar}>Incrementar</button>
        <button onClick={decrementar}>Decrementar</button>
      </div>
    );
  }
  
export default Contador;