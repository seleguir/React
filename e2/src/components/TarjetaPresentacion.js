import React from 'react'

// 2- Tarjeta de presentación 
function TarjetaPresentacion(props) {
  return (
    <div className="tarjeta">
    <img src={props.imagen} alt={`${props.nombre} ${props.apellido}`} className="imagen" />
    <div className="informacion">
      <h2>{props.nombre} {props.apellido}</h2>
      <p>{props.profesion}</p>
    </div>
  </div>
  );
}

export default TarjetaPresentacion; 
