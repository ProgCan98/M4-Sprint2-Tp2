// Importamos useState y useEffect de React para manejar estado y efectos
import { useState, useEffect } from 'react';

// Definimos el hook personalizado useWatchlist
function useWatchlist() {
  // Inicializamos el estado watchlist con datos de localStorage o un array vacío
  const [watchlist, setWatchlist] = useState(() => {
    const saved = localStorage.getItem('watchlist');
    return saved ? JSON.parse(saved) : [];
  });

  // Efecto que guarda watchlist en localStorage cuando cambia
  useEffect(() => {
    localStorage.setItem('watchlist', JSON.stringify(watchlist));
  }, [watchlist]);

  // Función para agregar una película, evitando duplicados
  const addToWatchlist = (movie) => {
    if (!watchlist.some((m) => m.id === movie.id)) {
      setWatchlist([...watchlist, movie]);
    }
  };

  // Función para eliminar una película por su id
  const removeFromWatchlist = (movieId) => {
    setWatchlist(watchlist.filter((m) => m.id !== movieId));
  };

  // Retornamos el estado y las funciones para usarlas en componentes
  return { watchlist, addToWatchlist, removeFromWatchlist };
}

// Exportamos el hook para que pueda ser usado en otros archivos
export default useWatchlist;
