import React from "react";
import "../../style/loadingPage.css";
import loaderImg from "../../img/loader-logo.png";

const LoadingPage = () => {
  return (
    <>
      <div className="loading-logo-img">
        <img src={loaderImg} alt="loader_image" />
        <p>Village Spark</p>
      </div>
      <div className="loading-container">
        <span className="loader"></span>
        <p className="loading-text">Welcome</p>
      </div>
    </>
  );
};

export default LoadingPage;
