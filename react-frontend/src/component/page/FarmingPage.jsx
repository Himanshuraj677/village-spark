import React from 'react';
import { Link } from 'react-router-dom';
import '../../style/farming-page.css';

const FarmingPage = () => {
  return (
    <div className="farming-container1 fade-in">
      <div className="farming-main-container1">
        <div className="first-container1">
          <div className="first-text1">
            <h3>Grow crops effectively and joyfully with us.</h3>
            <p>Be a part of Our Digital solution</p>
          </div>
          <div className="hero-image1"></div>
        </div>
        <h1 className="digital-solution1">We provide digital solutions for you</h1>

        {/* Additional Sections */}
        <div className="bottom-sections1">
          <Link to="/farming/marketplace" className="add-section">
            <h2>Sell Products</h2>
            <p>Start selling your products online</p>
          </Link>
          <a href="https://www.myscheme.gov.in/" className="add-section1" target="_blank" rel="noopener noreferrer">
            <h2>Government Schemes</h2>
            <p>Stay informed about government initiatives</p>
          </a>
          <Link to="/farming/crop-recommendation" className="add-section1">
            <h2>Crop Recommendation</h2>
            <p>Revolutionizing Agriculture: AI-Powered Crop Prediction for Maximum Yields</p>
          </Link>
          <Link to="/farming/crop-doctor" className="add-section1">
            <h2>Crop Doctor</h2>
            <p>AI-Powered Crop Disease Detection: A Futuristic Solution for Agricultural Health</p>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default FarmingPage;
