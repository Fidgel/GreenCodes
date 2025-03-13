import React from 'react';
import '../styles/InfoCard.css';

const InfoCard = ({ title, children }) => {
  return (
    <div className="info-card-container">
      <div className="info-card">
        <div className="info-card-header">
          <h2>{title}</h2>
        </div>
        <div className="info-card-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default InfoCard;