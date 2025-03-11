import React, { useState } from 'react';
import '../styles/Card.css';

const Card = ({ image, title, description, price, discountPrice, discount, affiliateLink }) => {
  const [expanded, setExpanded] = useState(false);
  
  // Get first part of description for preview
  const getDescriptionPreview = (desc) => {
    if (!desc) return '';
    // If description contains bullet points
    if (desc.includes('【') || desc.includes('•')) {
      const firstPoint = desc.split(/【.*?】|•/)[0];
      return firstPoint.length > 100 ? firstPoint.substring(0, 100) + '...' : firstPoint;
    }
    // Regular description
    return desc.length > 100 ? desc.substring(0, 100) + '...' : desc;
  };

  return (
    <div className="product-card">
      <div className="card-image-container">
        <img src={image} alt={title} className="card-image" />
      </div>
      
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        
        <div className="card-description">
          <p>{expanded ? description : getDescriptionPreview(description)}</p>
          {description && description.length > 100 && (
            <button 
              className="read-more-btn" 
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? 'Read Less' : 'Read More'}
            </button>
          )}
        </div>
        
        <div className="card-price">
          {price && <p className="original-price">{price}</p>}
          {discountPrice && <p className="discount-price">{discountPrice}</p>}
          {discount && <span className="discount-badge">{discount}</span>}
        </div>
        
        <a 
          href={affiliateLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="buy-button"
        >
          View on Amazon
        </a>
      </div>
    </div>
  );
};

export default Card;
