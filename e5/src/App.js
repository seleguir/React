import logo from './logo.svg';
import Formulario from './components/Formulario'; 
import './App.css';

// Crear un formulario para capturar el nombre de un usuario.
// Mostrar un mensaje de bienvenida cuando se envíe el formulario. 

function App() {
  return (
    <div className="App">
       <h1>Formulario de Bienvenida</h1>
       <Formulario/>
    </div>
  );
}

export default App;
