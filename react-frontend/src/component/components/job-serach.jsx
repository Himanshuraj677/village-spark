import React from "react";
import { useState } from "react";
import axios from "axios";
import SingleJobPost from "./SingleJobPost";
import Loader from "./loader";

const JobSearch = () => {
  const [pincode, setPincode] = useState("");
  const [jobList, setJobList] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const jobApiCall = async () => {
    if ((pincode >= 100000 && pincode <= 999999 )) {
      setJobList([]);
      setLoading(true); // Set loading to true before making the API call
      const query = {"pincode":pincode}
      try {
        const response = await axios.post("https://job-detail.onrender.com/jobs", query);
        if (response.data.length )setJobList(response.data);
        else setError("No job found at this pincode")
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false); // Set loading to false after the API call is complete
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
        {loading ? <Loader /> : null}
        {error && <div>{error}</div>}
        {jobList && jobList.map((job, index) => (
          <SingleJobPost key={index} contact={job.email} description={job.description} wage={job.wage} date={job.date} pincode={job.pincode} work={job.work}/>
        ))}
      </div>
    </>
  );
};

export default JobSearch;
