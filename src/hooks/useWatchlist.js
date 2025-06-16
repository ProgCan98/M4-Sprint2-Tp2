// Importamos useState y useEffect
import { useState, useEffect } from 'react';

// Hook personalizado para manejar la watchlist
function useWatchlist() {
  // Estado global para la watchlist
  const [watchlist, setWatchlist] = useState(() => {
    const saved = localStorage.getItem('watchlist');
    return saved ? JSON.parse(saved) : [];
  });

  // Cargar watchlist desde Local Storage al montar el componente
  useEffect(() => {
    const savedWatchlist = localStorage.getItem('watchlist');
    if (savedWatchlist) {
      setWatchlist(JSON.parse(savedWatchlist));
    }
  }, []); // Se ejecuta solo al montar

  // Guardar watchlist en Local Storage cuando cambie
  useEffect(() => {
    localStorage.setItem('watchlist', JSON.stringify(watchlist));
  }, [watchlist]); // Se ejecuta cada vez que watchlist cambia

  // Función para agregar una película (evita duplicados)
  const addToWatchlist = (movie) => {
    if (!watchlist.some((m) => m.id === movie.id)) {
      setWatchlist([...watchlist, movie]);
    }
  };

  // Función para eliminar una película
  const removeFromWatchlist = (movieId) => {
    setWatchlist(watchlist.filter((m) => m.id !== movieId));
  };

  return { watchlist, addToWatchlist, removeFromWatchlist };
}

export default useWatchlist;
