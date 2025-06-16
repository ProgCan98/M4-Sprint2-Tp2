// Importamos useState y useEffect de React para manejar estado y efectos
import { useState, useEffect } from 'react';
// Importamos los componentes Header, MovieList y WatchlistModal
import Header from '../components/Header';
import MovieList from '../components/MovieList';
import WatchlistModal from '../components/WatchlistModal';
// Importamos el hook useWatchlist para manejar la watchlist
import useWatchlist from '../hooks/useWatchlist';

// Definimos el componente Home
function Home() {
  // Estado para controlar la visibilidad del modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Obtenemos las funciones y estado de watchlist desde el hook
  const { watchlist, addToWatchlist, removeFromWatchlist } = useWatchlist();
  // Estado para el modo oscuro, inicializado desde localStorage
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  // Efecto para guardar el modo oscuro en localStorage y togglear la clase dark
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  // Array de ejemplo con películas
  const movies = [
    {
      id: 1,
      title: 'COMO ENTRENAR A TU DRAGON',
      image: 'https://www.cinemacenter.com.ar/img_movies/3135_img2.jpg',
    },
    {
      id: 2,
      title: 'LILO Y STITCH',
      image: 'https://www.cinemacenter.com.ar/img_movies/3213_img2.jpg',
    },
    {
      id: 3,
      title: 'EL ESQUEMA',
      image: 'https://www.cinemacenter.com.ar/img_movies/3230_img2.jpg',
    },
  ];

  // Renderizamos el componente con estructura flex y ajuste de tema
  return (
    <div
      className={`min-h-screen flex flex-col ${
        isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'
      }`}
    >
      <Header
        onOpenWatchlist={() => setIsModalOpen(true)}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />
      <main className="flex-grow">
        <MovieList movies={movies} onAddToWatchlist={addToWatchlist} />
      </main>
      {isModalOpen && (
        <WatchlistModal
          watchlist={watchlist}
          onClose={() => setIsModalOpen(false)}
          onRemoveFromWatchlist={removeFromWatchlist}
        />
      )}
    </div>
  );
}

// Exportamos Home como componente predeterminado
export default Home;
