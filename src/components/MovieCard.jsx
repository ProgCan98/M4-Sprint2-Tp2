// Importamos React para poder usar JSX y funcionalidades de React
import React from 'react';

// Definimos el componente MovieCard que recibe las props movie y onAddToWatchlist
function MovieCard({ movie, onAddToWatchlist }) {
  // Retornamos un div que representa la tarjeta de la película con estilos Tailwind
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white dark:bg-gray-800">
      <img className="w-full" src={movie.image} alt={movie.title} />

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-gray-900 dark:text-white">
          {movie.title}
        </div>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
          onClick={() => onAddToWatchlist(movie)}
        >
          Agregar a mi lista
        </button>
      </div>
    </div>
  );
}

// Exportamos MovieCard para que pueda ser usado en otros componentes
export default MovieCard;
