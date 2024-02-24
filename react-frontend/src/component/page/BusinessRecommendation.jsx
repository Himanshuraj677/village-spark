import React, { useState } from "react";
import BusinessData from "../components/BusinessData";
import Loader from "../components/loader";
import "../../style/business.css";
import RawTextToHtml from "../components/StyleRawText";

const Business = () => {
  const [businessData, setBusinessData] = useState(null);
  const [pincode, setPincode] = useState("");
  const [space, setSpace] = useState("");
  const [skill, setSkill] = useState("");
  const [investment, setInvestment] = useState("");
  const [inventory, setInventory] = useState("");
  const [activeFeature, setActiveFeature] = useState("questions");
  const [loading, setLoading] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questions = [
    { label: "Space (sqkm)", value: space, setter: setSpace },
    { label: "Skill", value: skill, setter: setSkill },
    { label: "Investment", value: investment, setter: setInvestment },
    { label: "Inventory", value: inventory, setter: setInventory },
  ];

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      callApi();
      setCurrentQuestion(0);
    }
  };

  
  const callApi = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://gdsc-backend-nnc4.onrender.com/generate_content",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            space,
            skill,
            investment,
            inventory,
          }),
        }
      );
      const data = await response.json();
      setBusinessData(data.content);
    } catch (error) {
      console.error("Error fetching business data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleBusinessByPincode = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://gdsc-backend-nnc4.onrender.com/get_business",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            pincode,
          }),
        }
      );
      const data = await response.json();
      setBusinessData(data);
    } catch (error) {
      console.error("Error fetching business data:", error);
    } finally {
      setLoading(false);
    }
  };

  const switchToQuestions = () => {
    setBusinessData(null);
    setActiveFeature("questions");
  };

  const switchToLocalBusiness = () => {
    setCurrentQuestion(0);
    setBusinessData(null);
    setActiveFeature("localBusiness");
  };

  return (
    <div className="business-container">
      <div className="business-switch">
        <span
          onClick={switchToQuestions}
          className={activeFeature === "questions" ? "active" : ""}
        >
          Get Business Idea
        </span>
        <span
          onClick={switchToLocalBusiness}
          className={activeFeature === "localBusiness" ? "active" : ""}
        >
          Local Business
        </span>
      </div>
      {activeFeature === "questions" && (
        <div className="business-option">
          <h3>Answer 4 Questions</h3>
          <label>{questions[currentQuestion].label}</label>
          <input
            type="text"
            placeholder={questions[currentQuestion].label}
            value={questions[currentQuestion].value}
            onChange={(e) => questions[currentQuestion].setter(e.target.value)}
          />
          <button onClick={handleNextQuestion}>
            {currentQuestion < questions.length - 1
              ? "Next Question"
              : "Get Business"}
          </button>
        </div>
      )}
      {activeFeature === "localBusiness" && (
        <div className="business-option">
          <h3>Local Business</h3>
          <input
            type="text"
            placeholder="Enter Pincode or area"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
          />
          <button onClick={handleBusinessByPincode}>Search</button>
        </div>
      )}
      {/* {loading && <Loader />} */}
      {activeFeature === "localBusiness" ? (
        <div>
          {loading ? (
            <Loader />
          ) : (
            businessData && <BusinessData data={businessData} />
          )}
        </div>
      ) : (
        <div>
          {loading ? (
            <Loader />
          ) : (
            businessData && (
              <div className="business-data">
                <h3>Business Data</h3>
                <pre>{<RawTextToHtml rawText={JSON.stringify(businessData)} />}</pre>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default Business;
