import logo from './logo.svg';
import foto from './images/foto.png';
import TarjetaPresentacion from './components/TarjetaPresentacion';
import './App.css';

// Crear un componente que represente una tarjeta de presentación con nombre, apellido, profesión y una imagen.
function App() {
  return (
    <div className="contenedor">
      <TarjetaPresentacion
         nombre="Selene"
         apellido="Guiridlian"
         profesion="Técnica en Informática"
         imagen={foto} // Utiliza la imagen importada 
      />
    </div>
  );
}

export default App;
