// Importamos React para usar JSX y funcionalidades de React
import React from 'react';

// Definimos el componente WatchlistModal que recibe watchlist, onClose y onRemoveFromWatchlist como props
function WatchlistModal({ watchlist, onClose, onRemoveFromWatchlist }) {
  // Retornamos un div fijo que actúa como modal con fondo semi-transparente
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg w-1/2">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
          Mi Lista de Películas
        </h2>

        {watchlist.length === 0 ? (
          <p className="text-gray-900 dark:text-white">
            No hay películas en tu lista.
          </p>
        ) : (
          // Lista de películas si hay elementos
          <ul>
            {watchlist.map((movie) => (
              <li
                key={movie.id}
                className="flex justify-between items-center mb-2"
              >
                <span className="text-gray-900 dark:text-white">
                  {movie.title}
                </span>

                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                  onClick={() => onRemoveFromWatchlist(movie.id)}
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
        )}

        <button
          className="mt-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          onClick={onClose}
        >
          Cerrar
        </button>
      </div>
    </div>
  );
}

// Exportamos WatchlistModal para que pueda ser usado en otros componentes
export default WatchlistModal;
