import { useEffect, useState } from 'react';
import './modalInfoMovie.css';
import Api from '../Api/Api';
import { IMovie, IPropsModalInfoMovie } from '../../common/interfaces';
import Content from './ContentModal';

const ModalInfoMovie = ({ id, onCloseModal }: IPropsModalInfoMovie) => {
  const [movie, setMovie] = useState<IMovie>({
    adult: false,
    backdrop_path: '',
    genre_ids: [],
    id: '',
    original_language: '',
    original_title: '',
    overview: '',
    popularity: 0,
    poster_path: '',
    release_date: '',
    title: '',
    video: false,
    vote_average: 0,
    vote_count: 0,
  });
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const api = new Api();
    api
      .getFilmInfo(id)
      .then((movie) => {
        setMovie(movie);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [id]);

  const content = !(isLoading || error) ? (
    <Content
      onCloseModal={onCloseModal}
      title={movie.title}
      backdrop_path={movie.backdrop_path}
      overview={movie.overview}
      release_date={movie.release_date}
      vote_average={movie.vote_average}
      vote_count={movie.vote_count}
    />
  ) : null;
  return <>{content}</>;
};

export default ModalInfoMovie;
