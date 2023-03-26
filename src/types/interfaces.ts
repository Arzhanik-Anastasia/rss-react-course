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
  avatar: File;
};
