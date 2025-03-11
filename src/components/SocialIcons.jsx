import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTiktok, 
  faInstagram,
  faTwitter // for X (Twitter)
} from '@fortawesome/free-brands-svg-icons';
import '../styles/SocialIcons.css';

const SocialIcons = () => {
  return (
    <div className="social-icons-container">
      <a href="https://tiktok.com/@greencodes.at" target="_blank" rel="noopener noreferrer" className="social-icon-header">
        <FontAwesomeIcon icon={faTiktok} title="TikTok" />
      </a>
      
      <a href="https://x.com/greencodes.at" target="_blank" rel="noopener noreferrer" className="social-icon-header">
        <FontAwesomeIcon icon={faTwitter} title="X" />
      </a>
      
      <a href="https://instagram.com/greencodes.at" target="_blank" rel="noopener noreferrer" className="social-icon-header">
        <FontAwesomeIcon icon={faInstagram} title="Instagram" />
      </a>
      
      {/* For Threads (using custom styling since it might not have a dedicated icon) */}
      <a href="https://threads.net/@greencodes.at" target="_blank" rel="noopener noreferrer" className="social-icon-header threads-icon">
        @
      </a>
    </div>
  );
};

export default SocialIcons;