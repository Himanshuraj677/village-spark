import React from "react";

const SingleJobPost = (props) => {
  return (
    <div className="job-card">
        <h3>Hiring for {props.work}</h3>
        <h4>Contact: {props.contact}</h4>
        <h4>Wage:{props.wage}</h4>
        <h4>Date:{props.date}</h4>
        <h4>Pincode:{props.pincode}</h4>
        <button className="signup-btn">Apply</button>
    </div>
  );
};

export default SingleJobPost;
