import React from "react";
import { Link } from "react-router-dom";
import "../../style/jobPage.css";
const JobPage = () => {
  return (
    <div className="job-main-page">
      <Link to="/job/search" className="job-section job-section-1">
        <h2>Find Job</h2>
        <p>
          Get your job
        </p>
      </Link>
      <Link to="/job/chat" className="job-section job-section-2">
        <h2>Chat with AI</h2>
        <p>
          Your personalized AI assistamt
        </p>
      </Link>
    </div>
  );
};

export default JobPage;
