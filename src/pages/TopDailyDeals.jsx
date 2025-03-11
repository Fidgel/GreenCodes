import React from 'react';
import Card from '../components/Card';
import '../styles/TopDailyDeals.css';
import { productData } from '../data/products';
import logoImage from '../assets/logoGreenCodes1.png';
import SocialIcons from '../components/SocialIcons';

const TopDailyDeals = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <>
      <div className="logo-container">
        <img src={logoImage} alt="GreenCodes Logo" className="logo-icon"/>
        <h1 className="title">GreenCodes</h1>
        <SocialIcons />
      </div>
      
      <div className="deals-container">
        <div className="deals-header">
          <h1>Daily Deals for {currentDate}</h1>
          <p>Discover today's best offers and exclusive discounts</p>
        </div>
        
        <div className="card-container">
          {productData.map(product => (
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
    </>
  );
};

export default TopDailyDeals;