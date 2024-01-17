import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import SingleJobPost from "../components/SingleJobPost";

const JobSearch = () => {
  const [pincode, setPincode] = useState("");
  const [jobList, setJobList] = useState([]);
  const [error, setError] = useState(null);
  // let [disableButton, setDisableButton] = useState(false);
  useEffect(() => {
    console.log(jobList);
  }, [jobList[0]]);
  const jobApiCall = async () => {
    if ((pincode >= 100000 && pincode <= 999999 )) {
      console.log("It is valid pincode");
      const query = {"pincode":pincode}
      try {
        const response = await axios.post("http://192.168.30.119:5000/jobs", query);
        setJobList(response.data);
      } catch (error) {
        setError(error.message);
      }
    } else {
      setJobList([]);
      setError("Enter valid pincode");
      console.log("Enter valid pincode");
    }
  };
  return (
    <>
      <div className="pincode-container">
        <input
          className="pincode-search"
          type="text"
          placeholder="Enter pincode"
          onChange={(event) => setPincode(event.target.value)}
        />
        <button className="job-search-button" onClick={jobApiCall}>
          Search
        </button>
      </div>
      <div className="job-container">
        {/* <SingleJobPost />
        <SingleJobPost /> */}
        {jobList.map((job, index) => (
          <SingleJobPost key={index} contact={job.email} description={job.description} wage={job.wage} date={job.date} pincode={job.pincode} work={job.work}/>
        ))}
      </div>
    </>
  );
};

export default JobSearch;
