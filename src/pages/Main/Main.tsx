import { Component } from 'react';
import { Link } from 'react-router-dom';
import './main.css';

class Main extends Component {
  render() {
    return (
      <div className="app">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
      </div>
    );
  }
}

export default Main;
