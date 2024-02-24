import React from 'react';
import { Link } from 'react-router-dom';
import '../../style/businessPage.css';

const Features = () => {
  return (
    <div className="feature-container fade-in">
      <div className="business-main-container">
        <div className="first-container">
          <div className="first-text">
            <h3>It takes a village to raise a business</h3>
            <p>Be a part of Our Digital solution</p>
          </div>
          <div className="hero-image"></div>
        </div>
        <h1 className="digital-solution">We provide digital solutions for you</h1>

        {/* Additional Sections */}
        <div className="bottom-sections">
          <Link to="/business/chat" className="add-section">
            <h2>AI Chat</h2>
            <p>Your personalized AI assistant</p>
          </Link>
          <Link to="/business/post" className="add-section">
            <h2>Hire Employee</h2>
            <p>List job opportunities</p>
          </Link>
          <Link to="/business/recommendation" className="add-section">
            <h2>Business Recommendation</h2>
            <p>Get personalized business recommendations</p>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default Features;
