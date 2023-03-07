import { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header data-testid="header" className="header">
        <Link data-testid="home-link" to="/">
          Home
        </Link>
        <Link data-testid="about-link" to="/about">
          About Us
        </Link>
      </header>
    );
  }
}

export default Header;
