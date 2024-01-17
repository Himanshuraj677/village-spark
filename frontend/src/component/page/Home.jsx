import React from "react";
import "../../style/Home.css";
import { Link } from "react-router-dom";


const HomePage = () => {
  return (
    <div className="home-page-body">
      <div className="home-page">
        <Section
          title="Build your Business"
          icon="💼"
          link="/business"
        />
        <Section
          title="Farming"
          icon="🌾"
          link="/farming"
        />
        <Section
          title="Job"
          icon="👔"
          link="/job"
        />
        <Section
          title="Donation"
          icon="🤝"
          link="/donation"
        />
      </div>
    </div>
  );
};

const Section = ({ title, icon, link }) => {
  return (
    <div className="section">
      <div className="section-content">
        <div className="section-icon">{icon}</div>
        <h1>{title}</h1>
        <Link to={link}><button className="home-search-button">Explore {title}</button></Link>
      </div>
    </div>
  );
};

export default HomePage;
