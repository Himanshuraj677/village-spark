import React, { useState, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import "../../style/chat.css";
import UserResponse from "../components/userResponse";
import AiResponse from "../components/aiResponse";
import Loader from "../components/loader";

const genAI = new GoogleGenerativeAI("AIzaSyB2UNj81tQ79Pypkoi7OUhBJG_fFSnBr6A");
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

const Chat = () => {
  const [userResponse, setUserResponse] = useState("");
  const [modelResponse, setModelResponse] = useState("");
  const [conversation, setConversation] = useState([]);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsButtonDisabled(userResponse === "");
  }, [userResponse]);

  async function run() {
    setIsButtonDisabled(true);
    setIsLoading(true); // Set isLoading to true when the button is clicked

    const prompt = userResponse;
    setConversation((prevConversation) => [
      ...prevConversation,
      { role: "user", parts: prompt },
    ]);

    const result = await model.generateContent(prompt);
    const responseText = result.response.text();
    setModelResponse(responseText);
    setConversation((prevConversation) => [
      ...prevConversation,
      { role: "model", parts: responseText },
    ]);

    setUserResponse("");
    setIsLoading(false); // Set isLoading back to false after the response is received
    setIsButtonDisabled(false);
  }

  const handleClick = (event) => {
    if (event.key === "Enter" && userResponse !== "") {
      run();
    }
  };

  return (
    <div className="chat">
      <div className="chat-page">
        {conversation.map((item, index) => (
          <div key={index}>
            {item.role === "user" && <UserResponse response={item.parts} />}
            {item.role === "model" && <AiResponse response={item.parts} />}
          </div>
        ))}
        <div className="ai-flex-box">
          <input
            placeholder="Enter your Prompt"
            className="ai-chat-search"
            type="text"
            value={userResponse}
            onChange={(event) => setUserResponse(event.target.value)}
            onKeyDown={handleClick}
          />
          <div className="button-flex-box">
            <button
              className="ai-chat-button"
              disabled={isButtonDisabled}
              onClick={run}
            >
              &#8593;
            </button>
          </div>
        </div>
        {/* Conditionally render the Loader component */}
        {isLoading && <Loader />}
      </div>
    </div>
  );
};


export default Chat;
