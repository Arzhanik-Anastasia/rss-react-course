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

  render() {
    const elements = this.state.data.map((item: IData) => {
      const { id, ...itemProps } = item;
      return <CardListItem key={id} {...itemProps} />;
    });
    return <ul className="card__list"> {elements}</ul>;
  }
}

export default CardList;
