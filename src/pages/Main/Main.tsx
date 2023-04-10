import SearchBar from '../../components/SearchBar/SearchBar';
import ErrorMessage from './../../components/ErrorMessage/ErrorMessage';
import Loader from './../../components/Loader/Loader';
import MovieList from './../../components/MovieList/MovieList';
import { useAppDispatch, useAppSelector } from './../../store/hooks';
import { setSearch } from './../../reducer/movieReducer';
import './main.css';
import { getMovies } from './../../thunks/movie';
import { useEffect } from 'react';

const Main = () => {
  const dispatch = useAppDispatch();
  const { search, isLoading, error, movies } = useAppSelector((state) => state.movieCard);

  const onUpdateSearchBar = (search: string) => {
    dispatch(setSearch(search));
  };

  useEffect(() => {
    dispatch(getMovies(search));
  }, [dispatch, search]);

  return (
    <div className="app">
      <h2 data-testid="home-page">Home page</h2>
      <SearchBar onUpdateSearchBar={onUpdateSearchBar} search={search} />
      <div className="content-main">
        {error ? <ErrorMessage /> : null}
        {isLoading ? <Loader /> : null}
        {!(isLoading || error) ? <MovieList movies={movies} search={search} /> : null}
      </div>
    </div>
  );
};

export default Main;
