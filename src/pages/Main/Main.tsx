import { Component } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import CardList from '../../components/CardList/CardList';

import './main.css';

class Main extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <h2 data-testid="home-page">Home page</h2>
        <CardList term="" />
        <Footer />
      </div>
    );
  }
}

export default Main;
