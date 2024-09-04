import React, { useState } from 'react';

// 5- Formulario simple 
function Formulario() {
  const [nombre, setNombre] = useState('');
  const [mensaje, setMensaje] = useState('');

  const manejarCambio = (event) => {
    setNombre(event.target.value);
  };

  const manejarEnvio = (event) => {
    event.preventDefault();
    setMensaje(`¡Bienvenido/a, ${ nombre }!`);
  };

  return (
    <div>
      <form onSubmit={manejarEnvio}>
        <label>
          Nombre:
          <input type="text" value={nombre} onChange={manejarCambio} />
        </label>
        <button type="submit">Enviar</button>
      </form>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
}

export default Formulario;