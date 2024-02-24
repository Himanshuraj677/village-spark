import React from "react";
import { Link } from "react-router-dom";
import "../../style/donation.css"

const Donation = () => {
    return (
      <div className="donation-container">
        <main>
          <div className="title fadeIn">Catalyst for Hope: Transforming Lives</div>
          <div className="form">
            <h4>Payment Information</h4>
            <ul>
              <li>
                <code>9523643043@paytm</code>
              </li>
              <li>
                <code>9523643043@ybl</code>
              </li>
              <li>
                <input type="text" placeholder="Enter pincode" className="donation-input"/>
              </li>
            </ul>
  
            <h5>Easy way: Click the below button to Pay via UPI Apps.</h5>
            <div className="button-div">
              <Link to="upi://pay?pa=9523643043@ybl&pn=Village Spark&cu=INR" className="donate-link">
                Donate
              </Link>
            </div>
          </div>
        </main>
      </div>
    );
  };
  
  export default Donation;
