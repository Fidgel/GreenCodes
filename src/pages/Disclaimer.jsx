import React from 'react';
import Card from '../components/Card';
import '../styles/Disclaimer.css';
import logoImage from '../assets/logoGreenCodes1.png';
import SocialIcons from '../components/SocialIcons'; // Import the component

const Disclaimer = () => {
  return (
    <div className="disclaimer-container">
      <div className="disclaimer-header">
        <img src={logoImage} alt="GreenCodes Logo" className="logo-icon" />
        <h1 className="title">GreenCodes</h1>
        <SocialIcons /> {/* Add social icons here */}
      </div>
      
      <Card title="Disclaimer">
        <p><strong>Important Disclaimer:</strong> We may earn commissions for purchases made through links on our site.</p>
        <p>Product prices and availability are accurate as of the date/time indicated and are subject to change.</p>

        <p>The price and availability information displayed on Amazon at the time of purchase will apply to your order.</p>

        <p>Content, discounts, offers, images, prices, and availability may change or be removed at any time.</p>

        <p>GreenCodes participates in the Amazon Services LLC
        Associates Program, an affiliate advertising program that allows sites to earn advertising fees by linking to Amazon.com.</p>

        <p>Neither Amazon nor any store or brand mentioned on this website supports, sponsors, or endorses this website or its content.</p>

        <p>CERTAIN CONTENT THAT APPEARS ON THIS SITE COMES FROM AMAZON SERVICES LLC. THIS CONTENT IS PROVIDED 'AS IS' AND MAY BE SUBJECT TO CHANGE OR REMOVAL AT ANY TIME.</p>

        <p>Third-party product names, logos, brands, and trademarks are the property of their respective owners and are not affiliated with GreenCodes.</p>

        <p>These parties do not endorse, sponsor, or support this website, its content, or its services.</p>

        <p>GreenCodes does not claim to represent the manufacturers, brands, companies, or retailers listed on this site, nor does it own their trademarks, logos, marketing materials, or products.</p>

        <p>Images are for illustrative purposes only. GreenCodes does not sell products or services.</p>

        <p>This website is a news platform providing information about various offers found online to the best of our knowledge at the time of publication.</p>

        <p>GreenCodes does not ship products or samples and does not accept any form of payment.</p>

        <p>All the best,</p>

        <p>GreenCodes LLC</p>
      </Card>
    </div>
  );
};

export default Disclaimer;