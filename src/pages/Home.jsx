import React, { useState } from 'react';
import Card from '../components/Card';
import { useNavigate } from 'react-router-dom';
import logoImage from '../assets/GREEN.png';
import SocialIcons from '../components/SocialIcons';
import { productData } from '../data/products';
import '../styles/Home.css';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Home = () => {
  const navigate = useNavigate();
  const [expandedEpisode, setExpandedEpisode] = useState(0); // Start with first episode expanded
  
  // Group products into episodes (8 products per episode)
  const episodes = [];
  for (let i = 0; i < productData.length; i += 8) {
    episodes.push(productData.slice(i, i + 8));
  }
  
  // Reverse episodes so newest is at the top
  const reversedEpisodes = [...episodes].reverse();
  
  const handleExploreDeals = () => {
    navigate('/top-deals');
  };
  
  const toggleEpisode = (index) => {
    if (expandedEpisode === index) {
      setExpandedEpisode(null); // Close if already open
    } else {
      setExpandedEpisode(index); // Open the clicked episode
    }
  };

  return (
    <>
      <div className="logo-container">
        <img src={logoImage} alt="GreenCodes Logo" className="logo-icon"/>
        <h1 className="title">GreenCodes</h1>
        <SocialIcons />
      </div>
      
      <p>Discover the best daily deals and exclusive offers</p>
      
      <button 
        className="button"
        onClick={handleExploreDeals}
      >
        Top Daily Deals
      </button>
      
      <div className="episodes-accordion">
        {reversedEpisodes.map((episodeProducts, index) => {
          const actualEpisodeNumber = episodes.length - index;
          return (
            <div key={index} className="episode-section">
              <button 
                className={`episode-header ${expandedEpisode === index ? 'expanded' : ''}`}
                onClick={() => toggleEpisode(index)}
              >
                <span>Episode {actualEpisodeNumber}</span>
                {expandedEpisode === index ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              
              {expandedEpisode === index && (
                <div className="episode-content">
                  <div className="card-container">
                    {episodeProducts.map(product => (
                      <Card 
                        key={product.id}
                        image={product.image}
                        title={product.title}
                        description={product.description}
                        price={product.price}
                        discountPrice={product.discountPrice}
                        discount={product.discount}
                        affiliateLink={product.affiliateLink}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      
      <p className="bottom-message">Stay tuned for more Deals!.</p>
    </>
  );
};

export default Home;