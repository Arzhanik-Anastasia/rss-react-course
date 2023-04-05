import { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import SearchBar from '../../components/SearchBar/SearchBar';
import Footer from '../../components/Footer/Footer';
import ErrorMessage from './../../components/ErrorMessage/ErrorMessage';
import Loader from './../../components/Loader/Loader';
import MovieList from './../../components/MovieList/MovieList';
import { IMovies } from './../../types/interfaces';
import './main.css';
import Api from './../../components/Api/Api';

const Main = () => {
  const [search, setSearch] = useState<string>(localStorage.getItem('search') || '');
  const [error, setError] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [movies, setMovies] = useState<IMovies>({
    page: 1,
    results: [],
    total_pages: 0,
    total_results: 0,
  });

  const onUpdateSearchBar = (search: string) => {
    setSearch(search);
  };

  useEffect(() => {
    const api = new Api();
    api
      .getMovieList(search)
      .then((data) => {
        setMovies(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
    return function cleanup() {
      setMovies({
        page: 1,
        results: [],
        total_pages: 0,
        total_results: 0,
      });
      setLoading(true);
    };
  }, [search]);

  return (
    <div className="app">
      <Header />
      <h2 data-testid="home-page">Home page</h2>
      <SearchBar onUpdateSearchBar={onUpdateSearchBar} search={search} />
      <div className="content-main">
        {error ? <ErrorMessage /> : null}
        {isLoading ? <Loader /> : null}
        {!(isLoading || error) ? <MovieList movies={movies} search={search} /> : null}
      </div>
      <Footer />
    </div>
  );
};

export default Main;
