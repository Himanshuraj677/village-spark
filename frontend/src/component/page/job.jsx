import React from "react";
import "../../style/job.css";
import image1 from "../../img/job1.jpg";
import image2 from "../../img/job2.jpg";
import image3 from "../../img/job3.jpg";
// import { Link } from "react-router-dom";
import { UncontrolledExample } from "./Farming";
import JobSearch from "../components/job-serach";
const Job = () => {
  return (
    <div className="job-page">
      <UncontrolledExample image1={image1} image2={image2} image3={image3} />
      <JobSearch />
      
    </div>
  );
};

export default Job;
