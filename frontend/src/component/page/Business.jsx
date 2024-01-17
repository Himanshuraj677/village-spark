import React from 'react';
import { Link } from 'react-router-dom';
import '../../style/business.css';

const Business = () => {
  return (
    <div className="business-container fade-in">
      <div className="business-main-container">
        <div className="first-container">
          <div className="first-text">
            <h3>Let spark your Business</h3>
            <p>Be a part of Our Digital solution</p>
          </div>
          <div className="hero-image"></div>
        </div>
        <h1 className="digital-solution">We provide digital solutions for you</h1>

        {/* Additional Sections */}
        <div className="bottom-sections">
          <Link to="/chat" className="add-section">
            <h2>AI Chat</h2>
            <p>Your personalized AI assistant</p>
          </Link>
          <Link to="/post" className="add-section">
            <h2>Job Posts</h2>
            <p>Explore job opportunities</p>
          </Link>
          <Link to="/farming" className="add-section">
            <h2>Sell Products</h2>
            <p>Start selling your products online</p>
          </Link>
          <a href="https://www.myscheme.gov.in/" className="add-section" target="_blank" rel="noopener noreferrer">
            <h2>Government Schemes</h2>
            <p>Stay informed about government initiatives</p>
          </a>
          <Link to="/business" className="add-section">
            <h2>Business Recommendation</h2>
            <p>Get personalized business recommendations</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Business;
