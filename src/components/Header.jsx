import { Link } from 'react-router-dom';
import { FiHome, FiInfo, FiAlertTriangle } from 'react-icons/fi';

const Header = () => (
  <header className="header">
    <nav className="nav-container">
      <Link to="/" className="logo">
        <FiHome /> GreenCodes
      </Link>
      <div className="nav-links">
        <Link to="/">Top Daily Deals</Link>
        <Link to="/about">About Us</Link>
        <Link to="/disclaimer">Disclaimer</Link>
      </div>
    </nav>
  </header>
);

export default Header;