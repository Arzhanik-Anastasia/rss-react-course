import MovieListItem from './../../components/MovieListItem/MovieListItem';
import { IPropsMovieList } from './../../types/interfaces';
import './movieList.css';

const MovieList = ({ movies }: IPropsMovieList) => {
  console.log('movies: ', movies);
  return (
    <ul className="movieslist" data-testid="movielist">
      {movies.results.map((movie) => {
        return (
          <li key={movie.id} className="movie__item">
            <MovieListItem item={movie} id={movie.id} />
          </li>
        );
      })}
    </ul>
  );
};

export default MovieList;
