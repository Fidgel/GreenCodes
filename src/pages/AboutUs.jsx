import React from 'react';
import InfoCard from '../components/InfoCard'; // Change to InfoCard
import '../styles/AboutUs.css';
import logoImage from '../assets/GREEN.png';
import SocialIcons from '../components/SocialIcons';

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <img src={logoImage} alt="GreenCodes Logo" className="logo-icon" />
        <h1 className="title">GreenCodes</h1>
        <SocialIcons />
      </div>
      
      <InfoCard title="About Us">
        <p>
          At GreenCodes, we're all about bringing you the best deals and exclusive promo codes, 
          saving you time and money on the products you love. With a community of over 500k savvy shoppers, 
          we curate top-notch offers from trusted brands, making sure you never miss out on a great deal. 
          Shop smart, save more, and join our growing family of deal hunters today!
        </p>
      </InfoCard>
    </div>
  );
};

export default AboutUs;