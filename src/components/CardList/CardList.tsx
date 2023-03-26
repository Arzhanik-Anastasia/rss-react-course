import { Component } from 'react';
import { IData } from '../../types/interfaces';
import CardListItem from '../CardListItem/CardListItem';
import './cardList.css';

type IProps = {
  term: string;
  data: IData[];
  onLiked: (id: number) => void;
};

class CardList extends Component<IProps> {
  searchCard = (cards: IData[], term = '') => {
    if (term.length === 0) {
      return cards;
    }
    return cards.filter((elem) => {
      return elem.title.toUpperCase().indexOf(term.toUpperCase()) > -1;
    });
  };

  render() {
    const { term, data } = this.props;
    const visibleData = this.searchCard(data, term);
    const elements = visibleData.map((item: IData) => {
      const { id } = item;
      return <CardListItem key={id} {...item} onLiked={() => this.props.onLiked(id)} />;
    });
    return <ul className="card__list"> {elements}</ul>;
  }
}

export default CardList;
