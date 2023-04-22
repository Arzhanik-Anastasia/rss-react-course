import { NavLink } from 'react-router-dom';
import './header.css';

const Header = () => {
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
        <NavLink
          data-testid="form-link"
          to="/form"
          className={({ isActive }) => (isActive ? 'active-link' : '')}
        >
          Form
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
