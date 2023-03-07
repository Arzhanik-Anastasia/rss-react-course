import { Component } from 'react';
import data from '../../data';
import IData from '../../types/interfaces';
import CardListItem from '../CardListItem/CardListItem';
import './cardList.css';

type IProps = {
  term: string;
};

type StateType = {
  data: IData[];
};

class CardList extends Component<IProps, StateType> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      data: data,
    };
  }

  searchCard = (cards: IData[], term = '') => {
    if (term.length === 0) {
      return cards;
    }
    return cards.filter((elem) => {
      return elem.title.toUpperCase().indexOf(term.toUpperCase()) > -1;
    });
  };

  onLiked = (id: number) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, liked: !item.liked };
        }
        return item;
      }),
    }));
  };

  render() {
    const { term } = this.props;
    const visibleData = this.searchCard(this.state.data, term);
    const elements = visibleData.map((item: IData) => {
      const { id, ...itemProps } = item;
      return <CardListItem key={id} {...itemProps} onLiked={() => this.onLiked(id)} />;
    });
    return <ul className="card__list"> {elements}</ul>;
  }
}

export default CardList;
