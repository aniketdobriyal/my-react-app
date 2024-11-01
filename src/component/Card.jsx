import React from 'react';
import './Card.css'; // Import the updated CSS file for styling

const Card = ({ title, description, image }) => {
  return (
    <div className="creative-card">
      <div className="creative-card-image-container">
        <img src={image} alt={title} className="creative-card-image" />
        <div className="creative-card-overlay"></div>
      </div>
      <div className="creative-card-content">
        <h3 className="creative-card-title">{title}</h3>
        <p className="creative-card-description">{description}</p>
      </div>
    </div>
  );
};

export default Card;
