import React from "react";
import "../../style/callToAction.css";
import ctaImage1 from "../../img/find-disease.jpg";
import ctaImage2 from "../../img/find-post-job.jpg";
import ctaImage3 from "../../img/find-right-business.jpg";
import ctaImage4 from "../../img/crop-recommendation.png";
import ctaImage5 from "../../img/chat-with-ai.webp";
import ctaImage6 from "../../img/buy-sell-crop.jpg";
import ctaImage7 from "../../img/donation-home.jpg";

const CallToAction = () => {
  return (
    <div className="cta-section">
      <h2>
        Building Brighter Futures: Business, Farming, Careers, and Compassion
      </h2>
      <div className="home-container">
        <div className="find-disease home-flex-box">
          <div className="dot-container">
            <img src={ctaImage1} alt="" />
          </div>
          <div className="home-each-content">
            <h2>Find Disease of Crop</h2>
            <p>
              Identify crop diseases quickly and accurately with our platform.
              Our advanced image recognition technology analyzes photos of your
              crops to detect diseases or pests. This proactive approach
              empowers farmers to take immediate action, safeguarding their
              crops and maximizing yield. Our platform offers a seamless and
              efficient solution for maintaining crop health, ensuring a
              prosperous harvest.
            </p>
          </div>
        </div>
        <div className="post-find-job home-flex-box">
          <div className="dot-container">
            <img src={ctaImage2} alt="" />
          </div>
          <div className="home-each-content">
            <h2>Find & Post Job</h2>
            <p>
              Our job board platform connects job seekers with employers,
              offering a streamlined process for finding or posting job
              listings. Whether you're seeking a new career opportunity or
              looking to hire top talent, our platform offers a user-friendly
              experience, ensuring a seamless match between job seekers and
              employers.
            </p>
          </div>
        </div>
        <div className="find-business home-flex-box">
          <div className="dot-container">
          <img src={ctaImage3} alt="" />
          </div>
          <div className="home-each-content">
            <h2>Find Business</h2>
            <p>
              Explore local businesses ready for growth in your area with our
              platform. We analyze market trends and demographics to offer
              personalized recommendations. Whether you're a business owner
              seeking expansion or a consumer looking for new opportunities, we
              connect you with businesses aligned with your interests. Join us
              in supporting local commerce, economic development, and community
              growth.
            </p>
          </div>
        </div>
        <div className="crop-recommendation home-flex-box">
          <div className="dot-container">
            <img src={ctaImage4} alt="" />
          </div>
          <div className="home-each-content">
            <h2>Crop Recommendation</h2>
            <p>
              Our platform leverages advanced algorithms to provide personalized
              crop recommendations based on location, soil type, and climate. By
              analyzing these factors, we offer tailored suggestions for crops
              that will thrive in specific agricultural environments, helping
              farmers optimize their yield and profitability.
            </p>
          </div>
        </div>
        <div className="chat-with-ai home-flex-box">
          <div className="dot-container">
          <img src={ctaImage5} alt="" />
          </div>
          <div className="home-each-content">
            <h2>Chat With AI</h2>
            <p>
              Engage in real-time conversations with our AI-powered chatbot,
              designed to provide quick and accurate responses to user queries.
              Whether you need assistance with our platform's features or have
              general questions, our chatbot is here to help, offering a
              seamless and efficient support experience.
            </p>
          </div>
        </div>
        <div className="buy-sell-crop home-flex-box">
          <div className="dot-container">
          <img src={ctaImage6} alt="" />
          </div>
          <div className="home-each-content">
            <h2>Buy & Sell Crop</h2>
            <p>
              Our secure and user-friendly marketplace facilitates the buying
              and selling of crops, connecting buyers and sellers in a seamless
              transaction process. Whether you're a farmer looking to sell your
              produce or a buyer seeking quality crops, our platform ensures a
              smooth and reliable marketplace experience.
            </p>
          </div>
        </div>
        <div className="donate home-flex-box">
          <div className="dot-container">
          <img src={ctaImage7} alt="" />
          </div>
          <div className="home-each-content">
            <h2>Donate For Better Future</h2>
            <p>
              Support causes that matter to you through our donation platform,
              which allows users to contribute to charitable organizations.
              Whether you want to give back to your community or support a
              global initiative, our platform makes it easy to donate to a
              variety of causes, promoting social responsibility and positive
              change.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
