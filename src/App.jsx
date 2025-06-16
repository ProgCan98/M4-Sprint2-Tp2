// Importamos los estilos globales definidos en index.css para aplicar a toda la aplicación
import './index.css';
// Importamos el componente Home desde la carpeta pages para usarlo como contenido principal
import Home from './pages/Home';

// Definimos la función App como el componente principal de la aplicación
function App() {
  // Retornamos un div que contiene el componente Home como su único hijo
  return (
    <div>
      <Home />
    </div>
  );
}

// Exportamos App como el componente predeterminado para que pueda ser usado en otros archivos
export default App;
