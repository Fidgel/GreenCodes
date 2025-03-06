import React from 'react';
import { FiBriefcase, FiTag } from 'react-icons/fi';

const Home = () => (
  <div className="home-container">
    <section className="hero-section">
      <h1>Welcome to GreenCodes</h1>
      <p>Discover the best daily deals and exclusive offers</p>
    </section>
    <section className="featured-deals">
      <h2>Top Daily Deals</h2>
      <div className="deal-cards">
        {/* Add deal cards here */}
      </div>
    </section>
  </div>
);

export default Home;