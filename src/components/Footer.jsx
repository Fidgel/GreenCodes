import React from 'react';
import { FaInstagram, FaTwitter, FaTelegram, FaTiktok } from 'react-icons/fa';
import '../styles/Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-left">
          <Link to="/" className="footer-logo">GreenCodes</Link>
        </div>
        <div className="footer-center">
          <Link to="/top-deals" className="footer-button">Top Daily Deals</Link>
        </div>
        <div className="footer-right">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon"><FaInstagram /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon"><FaTwitter /></a>
          <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="social-icon"><FaTelegram /></a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="social-icon"><FaTiktok /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;