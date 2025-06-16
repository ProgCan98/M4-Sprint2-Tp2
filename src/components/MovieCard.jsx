function MovieCard({ movie, onAddToWatchlist }) {
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

export default MovieCard;
