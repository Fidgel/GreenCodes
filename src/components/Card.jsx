import React from 'react';
import '../styles/Card.css'; // Ensure this path is correct

const Card = ({ children, image, title, description, price, discountPrice, discount, affiliateLink }) => {
  // For affiliate products
  if (affiliateLink) {
    return (
      <div className="card product-card">
        <a href={affiliateLink} target="_blank" rel="noopener noreferrer" className="card-link">
          {/* Ensure image is rendered with fallback handling */}
          {image && (
            <img 
              src={image} 
              alt={title || "Product"} 
              className="card-image" 
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://via.placeholder.com/300x200?text=Product+Image';
              }}
            />
          )}
          
          {discount && <div className="discount-badge">{discount}</div>}
          
          <div className="card-content">
            {title && <h3 className="card-title">{title}</h3>}
            {description && <p className="card-description">{description}</p>}
            
            {(price || discountPrice) && (
              <div className="price-container">
                {price && <span className="original-price">{price}</span>}
                {discountPrice && <span className="sale-price">{discountPrice}</span>}
              </div>
            )}
            
            <button className="view-deal-button">View Deal</button>
          </div>
        </a>
      </div>
    );
  }
  
  // Standard card (non-affiliate)
  return (
    <div className="card">
      {image && <img src={image} alt={title || "Image"} className="card-image" />}
      <div className="card-content">
        {title && <h3 className="card-title">{title}</h3>}
        {description && <p className="card-description">{description}</p>}
        {children}
      </div>
    </div>
  );
};

export default Card;
