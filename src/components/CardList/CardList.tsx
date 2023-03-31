import { IData } from '../../types/interfaces';
import CardListItem from '../CardListItem/CardListItem';
import './cardList.css';

export type IPropsList = {
  search: string;
  data: IData[];
};

const CardList = ({ data, search }: IPropsList) => {
  const searchCard = (data: IData[], search = '') => {
    if (search.length === 0) {
      return data;
    }
    return data.filter((elem) => {
      return elem.title.toUpperCase().indexOf(search.toUpperCase()) > -1;
    });
  };

  const visibleData = searchCard(data, search);
  const elements = visibleData.map((item: IData) => {
    const { id } = item;
    return <CardListItem key={id} {...item} />;
  });
  return <ul className="card__list"> {elements}</ul>;
};

export default CardList;
