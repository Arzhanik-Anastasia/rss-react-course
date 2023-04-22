import { Link } from 'react-router-dom';
import './notfound.css';

const NotFound = () => {
  return (
    <div className="wrapper__notfound">
      <h2 className="title">Oops...</h2>
      <p>404 Not found</p>
      <Link to="/" className="notfound__link">
        Home
      </Link>
    </div>
  );
};

export default NotFound;
