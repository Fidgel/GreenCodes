import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Nav.css';

const Nav = () => {
  const [menuActive, setMenuActive] = useState(false);
  
  useEffect(() => {
    const closeMenu = () => setMenuActive(false);
    window.addEventListener('resize', closeMenu);
    
    return () => {
      window.removeEventListener('resize', closeMenu);
    };
  }, []);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="logo" onClick={() => setMenuActive(false)}>
          GreenCodes
        </Link>
        
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle navigation menu">
          {menuActive ? '✕' : '☰'}
        </button>
        
        <ul className={`navbar-links ${menuActive ? 'active' : ''}`}>
          <li><Link to="/" onClick={() => setMenuActive(false)}>Home</Link></li>
          <li><Link to="/top-deals" onClick={() => setMenuActive(false)}>Top Deals</Link></li>
          <li><Link to="/about" onClick={() => setMenuActive(false)}>About Us</Link></li>
          <li><Link to="/disclaimer" onClick={() => setMenuActive(false)}>Disclaimer</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;