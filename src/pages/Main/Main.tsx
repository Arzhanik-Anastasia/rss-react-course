import { Component } from 'react';
import './main.css';
import Header from '../../components/Header/Header';
import SearchBar from '../../components/SearchBar/SearchBar';
import CardList from '../../components/CardList/CardList';
import Footer from '../../components/Footer/Footer';
import data from '../../data';
import { IData } from '../../types/interfaces';

type StateType = {
  term: string;
  data: IData[];
};

class Main extends Component<Record<string, unknown>, StateType> {
  state = {
    term: localStorage.getItem('search') || '',
    data: data,
  };

  onUpdateSearchBar = (term: string): void => {
    this.setState({ term });
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
    const { term, data } = this.state;
    return (
      <div className="app">
        <Header />
        <h2 data-testid="home-page">Home page</h2>
        <SearchBar onUpdateSearchBar={this.onUpdateSearchBar} term={term} />
        <CardList term={term} data={data} onLiked={this.onLiked} />
        <Footer />
      </div>
    );
  }
}

export default Main;
