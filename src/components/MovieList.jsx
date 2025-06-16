// Importamos el componente MovieCard para usarlo en la lista
import MovieCard from './MovieCard';

// Definimos el componente MovieList que recibe movies y onAddToWatchlist como props
function MovieList({ movies, onAddToWatchlist }) {
  // Retornamos un div con una cuadrícula responsiva para las tarjetas
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

// Exportamos MovieList para que pueda ser usado en otros componentes
export default MovieList;
