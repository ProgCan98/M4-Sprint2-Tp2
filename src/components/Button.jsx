// Definimos el componente Button que recibe children, onClick y className como props
function Button({ children, onClick, className = '' }) {
  // Retornamos un button con clases base y personalización opcional
  return (
    <button
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

// Exportamos Button para que pueda ser usado en otros componentes
export default Button;
