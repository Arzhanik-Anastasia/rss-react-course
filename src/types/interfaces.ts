import { FieldErrors, FieldValues, UseFormRegisterReturn } from 'react-hook-form';

export type IPropsMovieList = {
  search: string;
  movies: IMovies;
};

export type IMovies = {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
};

export type IMovie = {
  adult?: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: string;
  original_language?: string;
  original_title?: string;
  overview: string;
  popularity?: number;
  poster_path?: string;
  release_date: string;
  title: string;
  video?: boolean;
  vote_average: number;
  vote_count: number;
};

interface IForm {
  firstName: string;
  lastName: string;
  zipCode: string;
  birthDay: string;
  country: string;
  news: boolean;
  check: boolean;
}

export type IPropsForm = {
  onAddCard: (
    firstName: string,
    lastName: string,
    zipCode: string,
    birthDay: string,
    country: string,
    news: boolean,
    avatar: File,
    check: boolean
  ) => void;
};

export type IPropsInput = {
  register: UseFormRegisterReturn;
  nameInput: string;
  textLabel: string;
  type: string;
  datatestId: string;
  errors: FieldErrors<FieldValues>;
  max?: string;
  className?: string;
  classNameLabel?: string;
};

export interface IFormValue extends IForm {
  avatar: FileList;
}

export interface ICardForm extends IForm {
  avatar: File;
}

export type IPropsSearchBar = {
  onUpdateSearchBar: (search: string) => void;
  search: string;
};

export type IPropsModalInfoMovie = {
  id: string;
  onCloseModal: () => void;
};
