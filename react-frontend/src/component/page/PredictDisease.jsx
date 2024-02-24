import React, { useState } from 'react';
import "../../style/predict-disease.css";
import Loader from '../components/loader';

const PredictDisease = () => {
  const [image, setImage] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false); // Add a loading state

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleUpload = async () => {
    setLoading(true); // Set loading to true before making the API call
    try {
      const formData = new FormData();
      formData.append('image', image);

      const response = await fetch('https://gdsc-backend-nnc4.onrender.com/find_weed', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      setPrediction(data.response);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false); // Set loading to false after the API call is complete
    }
  };

  return (
    <div className="container">
      <h1 className='predict-heading'>Crop Doctor</h1>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button onClick={handleUpload}>Upload Image</button>
      {loading && <Loader />} {/* Conditionally render the Loader component */}
      {prediction && (
        <div className="prediction">
          <h2>Prediction</h2>
          <p>{prediction}</p>
        </div>
      )}
    </div>
  );
};

export default PredictDisease;