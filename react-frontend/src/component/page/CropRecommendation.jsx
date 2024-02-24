import React, { useState } from "react";
import "../../style/crop_recommendation.css";
import Loader from "../components/loader";
const CropRecommendation = () => {
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Add this line

  const predictCrop = async () => {
    setIsLoading(true); // Set loading state to true when request starts

    const data = {
      N: document.getElementById("N").value,
      P: document.getElementById("P").value,
      K: document.getElementById("K").value,
      temperature: document.getElementById("temperature").value,
      humidity: document.getElementById("humidity").value,
      ph: document.getElementById("ph").value,
      rainfall: document.getElementById("rainfall").value,
    };

    try {
      const response = await fetch(
        "https://gdsc-backend-nnc4.onrender.com/predict-crop",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error("Error predicting crop.");
      }

      const resultData = await response.json();
      setResult(`Predicted Crop: ${resultData.predicted_crop}`);
    } catch (error) {
      console.error("Error:", error.message);
      setResult("Error predicting crop. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="crop-reco-container">
      <h2>Soil Crop Prediction</h2>
      <div className="form-group">
        <label htmlFor="N">Nitrogen (N):</label>
        <input type="text" id="N" name="N" />
      </div>
      <div className="form-group">
        <label htmlFor="P">Phosphorus (P):</label>
        <input type="text" id="P" name="P" />
      </div>
      <div className="form-group">
        <label htmlFor="K">Potassium (K):</label>
        <input type="text" id="K" name="K" />
      </div>
      <div className="form-group">
        <label htmlFor="temperature">Temperature (°C):</label>
        <input type="text" id="temperature" name="temperature" />
      </div>
      <div className="form-group">
        <label htmlFor="humidity">Humidity (%):</label>
        <input type="text" id="humidity" name="humidity" />
      </div>
      <div className="form-group">
        <label htmlFor="ph">PH Value:</label>
        <input type="text" id="ph" name="ph" />
      </div>
      <div className="form-group">
        <label htmlFor="rainfall">Rainfall (mm):</label>
        <input type="text" id="rainfall" name="rainfall" />
      </div>
      <div className="form-group">
        <button disabled={isLoading} onClick={predictCrop}>Predict Crop</button>
      </div>
      <div id="result">{isLoading ? <Loader /> : result}</div>{" "}
    </div>
  );
};

export default CropRecommendation;
