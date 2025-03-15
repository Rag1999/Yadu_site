import React from 'react';
import './App.css';  // You can add custom styles for the component

const Cover = ({ title, subtitle, backgroundImage, children }) => {
  return (
    <div className="cover" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="cover-overlay">
        <div className="cover-content">
          {title && <h1 className="cover-title">{title}</h1>}
          {subtitle && <h2 className="cover-subtitle">{subtitle}</h2>}
          {children}
        </div>
      </div>
    </div>
  );
};

export default Cover;