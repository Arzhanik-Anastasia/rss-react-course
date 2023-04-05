import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <header data-testid="header" className="header">
      <Link data-testid="home-link" to="/">
        Home
      </Link>
      <Link data-testid="about-link" to="/about">
        About Us
      </Link>
      <Link data-testid="form-link" to="/form">
        Form
      </Link>
    </header>
  );
};

export default Header;
