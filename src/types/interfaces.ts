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

export type IFormValue = {
  firstName: string;
  lastName: string;
  zipCode: string;
  birthDay: string;
  country: string;
  news: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  /*   avatar: any; */
  avatar: FileList;
  check: boolean;
};

export type IPropsSearchBar = {
  onUpdateSearchBar: (search: string) => void;
  search: string;
};
