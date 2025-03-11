import React from 'react';
import Card from '../components/Card';
import '../styles/AboutUs.css';
import logoImage from '../assets/logoGreenCodes1.png';
import SocialIcons from '../components/SocialIcons'; // Import the component

const AboutUs = () => {
  return (
    <>
      <div className="about-logo-container">
        <img src={logoImage} alt="GreenCodes Logo" className="logo-icon" />
        <h1 className="title">GreenCodes</h1>
        <SocialIcons /> {/* Add social icons here */}
      </div>
      
      <div className="about-container">
        <Card title="About Us">
          <p>
            At GreenCodes, we're all about bringing you the best deals and exclusive promo codes, 
            saving you time and money on the products you love. With a community of over 500k savvy shoppers, 
            we curate top-notch offers from trusted brands, making sure you never miss out on a great deal. 
            Shop smart, save more, and join our growing family of deal hunters today!
          </p>
        </Card>
      </div>
    </>
  );
};

export default AboutUs;