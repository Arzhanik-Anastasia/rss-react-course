import { useEffect } from 'react';
import './modalInfoMovie.css';
import Content from './ContentModal';
import { IPropsModalInfoMovie } from './../../types/interfaces';
import { useAppDispatch, useAppSelector } from './../../store/hooks';
import { getMovie } from './../../thunks/movie';

const ModalInfoMovie = ({ id, onCloseModal }: IPropsModalInfoMovie) => {
  const { movieInfo, isLoading, error } = useAppSelector((state) => state.movieCard);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMovie(id));
  }, [dispatch, id]);

  const content = !(isLoading || error) ? (
    <Content
      onCloseModal={onCloseModal}
      title={movieInfo.title}
      backdrop_path={movieInfo.backdrop_path}
      overview={movieInfo.overview}
      release_date={movieInfo.release_date}
      vote_average={movieInfo.vote_average}
      vote_count={movieInfo.vote_count}
    />
  ) : null;
  return <>{content}</>;
};

export default ModalInfoMovie;
