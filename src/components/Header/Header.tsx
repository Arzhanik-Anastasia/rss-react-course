import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

class Header extends Component<{ title: string }> {
  render() {
    console.log(this.props.title);
    return (
      <header data-testid="header" className="header">
        <div className="header__navigation">
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
        </div>
        <h2 className="header__title">{this.props.title}</h2>
      </header>
    );
  }
}

export default Header;
