import { Component } from 'react';
import './main.css';
import Header from '../../components/Header/Header';
import SearchBar from '../../components/SearchBar/SearchBar';
import CardList from '../../components/CardList/CardList';
import Footer from '../../components/Footer/Footer';

type StateType = {
  term: string;
};

class Main extends Component<Record<string, unknown>, StateType> {
  state = {
    term: localStorage.getItem('search') || '',
  };

  onUpdateSearchBar = (term: string): void => {
    this.setState({ term });
  };

  render() {
    const { term } = this.state;
    return (
      <div className="app">
        <h2 data-testid="home-page">Home page</h2>
        <SearchBar onUpdateSearchBar={this.onUpdateSearchBar} term={term} />
        <CardList term={term} />
      </div>
    );
  }
}

export default Main;
