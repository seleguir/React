import logo from './logo.svg';
import ListaDeTareas from './components/ListaDeTareas';
import './App.css';

// Crear un componente que muestre una lista de tareas. Agregar tareas a la lista y marcarlas como completadas.
function App() {
  return (
    <div className="App">
      <ListaDeTareas/>
    </div>
  );
}

export default App;
