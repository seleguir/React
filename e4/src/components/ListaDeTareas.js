import React, { useState } from 'react';

// 4- Lista de tareas
function ListaDeTareas() {
    const [tareas, setTareas] = useState([]);
    const [nuevaTarea, setNuevaTarea] = useState('');
  
    // Función para agregar una nueva tarea a la lista
    const agregarTarea = () => {
      if (nuevaTarea.trim() !== '') {
        setTareas([...tareas, { texto: nuevaTarea, completada: false }]);
        setNuevaTarea(''); // Limpia el input después de agregar la tarea
      }
    };
  
    // Función para marcar una tarea como completada
    const marcarComoCompletada = (indice) => {
      const nuevasTareas = [...tareas];
      nuevasTareas[indice].completada = !nuevasTareas[indice].completada;
      setTareas(nuevasTareas);
    };

    return (
        <div>
          <h2>Lista de Tareas</h2>
          <input
            type="text"
            value={nuevaTarea}
            onChange={(e) => setNuevaTarea(e.target.value)}
            placeholder="Agregar nueva tarea"
          />
          <button onClick={agregarTarea}>Agregar Tarea</button>
          <ul>
            {tareas.map((tarea, indice) => (
              <li
                key={indice}
                onClick={() => marcarComoCompletada(indice)}
                style={{
                  textDecoration: tarea.completada ? 'line-through' : 'none',
                  cursor: 'pointer',
                }}
               >
                {tarea.texto}
              </li>
            ))}
          </ul>
        </div>
    );
}

export default ListaDeTareas; 
