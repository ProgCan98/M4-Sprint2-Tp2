import { useState, useEffect } from 'react';
import Header from '../components/Header';
import MovieList from '../components/MovieList';
import WatchlistModal from '../components/WatchlistModal';
import useWatchlist from '../hooks/useWatchlist';

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { watchlist, addToWatchlist, removeFromWatchlist } = useWatchlist();
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

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

export default Home;
