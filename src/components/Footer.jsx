import { FaTiktok, FaInstagram, FaTwitter, FaTelegram, FaThreads } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <div className="footer-left">
        <h3>GreenCodes</h3>
        <div className="footer-links">
          <Link to="/">Top Daily Deals</Link>
          <Link to="/about">About Us</Link>
        </div>
      </div>
      <div className="footer-right">
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
          <FaTiktok />
        </a>
        {/* Add other social media icons here */}
      </div>
    </div>
  </footer>
);

export default Footer;