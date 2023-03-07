import { Component } from 'react';
import Footer from '../../component/Footer/Footer';
import Header from '../../component/Header/Header';
import './main.css';

class Main extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <h2>Home page</h2>
        <Footer />
      </div>
    );
  }
}

export default Main;
