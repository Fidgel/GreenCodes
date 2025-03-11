import React, { useEffect, useRef } from 'react';
import Nav from './Nav';
import Footer from './Footer';
import BubbleAnimation from './BubbleAnimation';
import '../styles/Layout.css';

const Layout = ({ children }) => {
  // Reference to store the previous scroll position
  const prevScrollPos = useRef(0);

  useEffect(() => {
    // Get initial scroll position
    prevScrollPos.current = window.scrollY;
    
    // Initialize navbar visibility based on initial scroll position
    const nav = document.querySelector('.navbar');
    if (nav) {
      if (window.scrollY <= 10) {
        // Always show at the very top
        nav.classList.remove('hidden');
      }
    }

    const handleScroll = () => {
      const nav = document.querySelector('.navbar');
      const currentScrollPos = window.scrollY;
      
      if (nav) {
        // Always show navbar when at the top
        if (currentScrollPos <= 10) {
          nav.classList.remove('hidden');
        } 
        // Scrolling down: hide navbar
        else if (prevScrollPos.current < currentScrollPos) {
          nav.classList.add('hidden');
        } 
        // Scrolling up: show navbar
        else {
          nav.classList.remove('hidden');
        }
      }
      
      // Update the previous scroll position
      prevScrollPos.current = currentScrollPos;
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div className="container">
      <BubbleAnimation />
      <div className="overlay"></div>
      
      <Nav />
      
      <div className="content">
        {children}
      </div>
      
      <Footer />
    </div>
  );
};

export default Layout;