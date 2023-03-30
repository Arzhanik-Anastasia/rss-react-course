export type IData = {
  id: number;
  title: string;
  author: string;
  img: string;
  description: string;
  likedCount: number;
  seeCount: number;
  liked: boolean;
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
