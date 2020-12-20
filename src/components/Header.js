import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Link tags will work as your anchor tag - defines which route path to link to

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">My Portfolio</Link>
        <div className="collapse navbar-collapse">
          <div className="navbar-nav">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/projects">Projects</Link>
            <Link className="nav-link" to="/about">About</Link>
            <Link className="nav-link" to="/contact">Contact</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;