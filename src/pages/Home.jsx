import React from 'react';
import Card from '../components/Card';
import { useNavigate } from 'react-router-dom';
import logoImage from '../assets/logoGreenCodes1.png';
import SocialIcons from '../components/SocialIcons';
import { productData } from '../data/products'; // Import the product data

const Home = () => {
  const navigate = useNavigate();
  
  const handleExploreDeals = () => {
    navigate('/top-deals');
  };

  // Get the first 4 products for the homepage
  const featuredProducts = productData.slice(0, 4);

  return (
    <>
      <div className="logo-container">
        <img src={logoImage} alt="GreenCodes Logo" className="logo-icon"/>
        <h1 className="title">GreenCodes</h1>
        <SocialIcons />
      </div>
      <p>Discover the best daily deals and exclusive offers</p>
      <p>We're building something amazing! Stay tuned for our full website launch.</p>
      <button 
        className="button"
        onClick={handleExploreDeals}
      >
        Top Daily Deals
      </button>
      
      <div className="card-container">
        {featuredProducts.map(product => (
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
    </>
  );
};

export default Home;