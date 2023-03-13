import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

class Header extends Component {
  render() {
    return (
      <header data-testid="header" className="header">
        <NavLink
          data-testid="home-link"
          to="/"
          className={({ isActive }) => (isActive ? 'active-link' : '')}
        >
          Home
        </NavLink>
        <NavLink
          data-testid="about-link"
          to="/about"
          className={({ isActive }) => (isActive ? 'active-link' : '')}
        >
          About Us
        </NavLink>
        <NavLink
          data-testid="form-link"
          to="/form"
          className={({ isActive }) => (isActive ? 'active-link' : '')}
        >
          Form
        </NavLink>
      </header>
    );
  }
}

export default Header;
