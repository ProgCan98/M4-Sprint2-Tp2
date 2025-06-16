// Importamos MovieCard
import MovieCard from './MovieCard';

// Componente MovieList
function MovieList({ movies, onAddToWatchlist }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onAddToWatchlist={onAddToWatchlist}
        />
      ))}
    </div>
  );
}

export default MovieList;
