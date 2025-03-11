import React from 'react';
import Card from '../components/Card';
import '../styles/TopDailyDeals.css';

const TopDailyDeals = () => {
  // Get current date in format "March 8, 2025"
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="deals-container">
      <div className="deals-header">
        <h1>Daily Deals for {currentDate}</h1>
        <p>Discover today's best offers and exclusive discounts</p>
      </div>
      
      <div className="card-container">
        <Card 
          image="https://via.placeholder.com/300x200" 
          title="Wireless Earbuds" 
          description="Premium noise cancelling wireless earbuds with 30-hour battery life. 40% off today only!"
        />
        <Card 
          image="https://via.placeholder.com/300x200" 
          title="Smart Watch" 
          description="Track your fitness goals with this feature-packed smartwatch. Limited time offer: Save $50!"
        />
        <Card 
          image="https://via.placeholder.com/300x200" 
          title="Portable Charger" 
          description="20000mAh fast charging power bank compatible with all devices. Buy one get one free!"
        />
        <Card 
          image="https://via.placeholder.com/300x200" 
          title="Bluetooth Speaker" 
          description="Waterproof bluetooth speaker with 24-hour playtime and enhanced bass. 30% discount with promo code!"
        />
        <Card 
          image="https://via.placeholder.com/300x200" 
          title="Gaming Mouse" 
          description="Precision gaming mouse with customizable RGB lighting. Limited stock available at half price!"
        />
        <Card 
          image="https://via.placeholder.com/300x200" 
          title="Mechanical Keyboard" 
          description="Professional gaming mechanical keyboard with RGB backlight. Special weekend offer!"
        />
      </div>
    </div>
  );
};

export default TopDailyDeals;