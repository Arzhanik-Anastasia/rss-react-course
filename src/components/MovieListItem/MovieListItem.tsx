import { useState } from 'react';
import './movieListItem.css';
import { IMovie } from './../../types/interfaces';
import ModalInfoMovie from './../../components/ModalInfoMovie/ModalInfoMovie';

export type IPropsMovieListItem = {
  id: string;
  item: IMovie;
};

const MovieListItem = ({ item }: IPropsMovieListItem) => {
  const [isOpenModal, toggleModal] = useState(false);
  const imgSrc = item.poster_path
    ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
    : './png/no-photo.png';
  return (
    <>
      <div
        className="movie__inner"
        data-testid="movie-card"
        onClick={() => {
          toggleModal(true);
        }}
      >
        <img className="movie__img" src={imgSrc} alt={item.title} />
        <div className="movie__title"> {item.title} </div>
      </div>
      {isOpenModal ? (
        <div
          className="overlay"
          data-testid="overlay"
          onClick={() => {
            toggleModal(false);
          }}
        ></div>
      ) : (
        ''
      )}
      {isOpenModal ? (
        <ModalInfoMovie
          id={item.id}
          onCloseModal={() => {
            toggleModal(false);
          }}
        />
      ) : null}
    </>
  );
};
export default MovieListItem;
