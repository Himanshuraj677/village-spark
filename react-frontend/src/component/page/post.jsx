import React, { useState } from "react";
import "../../style/jobform.css";
import axios from "axios";

const initialFormData = {
  email: "",
  work: "",
  description: "",
  country: "",
  state: "",
  pincode: "",
  Duration: "",
  date: "",
  wage: "",
  contact: "",
};



const JobForm = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const postJob = async () => {
    try {
      const response = await axios.post(
        "https://job-detail.onrender.com/post",
        formData
      );
      setSuccessMessage("Job posted successfully");
      setTimeout(() => {
        setSuccessMessage(null);
      }, 3000);
      console.log(response.data);
    } catch (error) {
      setSuccessMessage(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    postJob();
    console.log("Form submitted:", formData);
    setFormData(initialFormData);
  };

  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const todayDate = `${day}-${month}-${year}`;
  formData.date = todayDate;

  return (
    <div className="user-form-container">
      {successMessage && <p className="success-message">{successMessage}</p>}
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          className="job-form-input"
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />

        <label>Work:</label>
        <input
          className="job-form-input"
          type="text"
          name="work"
          value={formData.work}
          onChange={handleChange}
          placeholder="Enter your work"
          required
        />

        <label>Description:</label>
        <textarea
          className="job-form-input"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Enter your description"
          required
        />

        <label>Country:</label>
        <input
          className="job-form-input"
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChange}
          placeholder="Enter your country"
          required
        />

        <label>State:</label>
        <input
          className="job-form-input"
          type="text"
          name="state"
          value={formData.state}
          onChange={handleChange}
          placeholder="Enter your state"
          required
        />

        <label>Pincode:</label>
        <input
          className="job-form-input"
          type="text"
          name="pincode"
          value={formData.pincode}
          onChange={handleChange}
          placeholder="Enter your pincode"
          required
        />

        <label>Duration:</label>
        <input
          className="job-form-input"
          type="text"
          name="Duration"
          value={formData.Duration}
          onChange={handleChange}
          placeholder="Enter the duration"
          required
        />

        <label>Date:</label>
        <input
          className="job-form-input"
          type="text"
          name="date"
          value={todayDate}
          onChange={handleChange}
          placeholder="Enter the date"
          required
        />

        <label>Wage:</label>
        <input
          className="job-form-input"
          type="text"
          name="wage"
          value={formData.wage}
          onChange={handleChange}
          placeholder="Enter your wage"
          required
        />

        <label>Contact:</label>
        <input
          className="job-form-input"
          type="text"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          placeholder="Enter your contact number"
          required
        />

        <button className="job-post-button" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default JobForm;
