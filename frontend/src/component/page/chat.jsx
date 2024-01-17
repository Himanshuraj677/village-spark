import React from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import "../../style/chat.css";
import { useState, useEffect } from "react";
import UserResponse from "../components/userResponse";
import AiResponse from "../components/aiResponse";

const genAI = new GoogleGenerativeAI("AIzaSyB2UNj81tQ79Pypkoi7OUhBJG_fFSnBr6A");
const model = genAI.getGenerativeModel({ model: "gemini-pro" });
const Chat = () => {
  let [userResponse, setUserResponse] = useState("");
  const [conversation, setConversation] = useState([]);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  useEffect(() => {
    userResponse === ""
      ? setIsButtonDisabled(true)
      : setIsButtonDisabled(false);
  }, [userResponse]);
  async function run() {
    // For text-only input, use the gemini-pro model
    setIsButtonDisabled(true);
    const prompt = userResponse;
    setUserResponse("");

    const result = await model.generateContent(prompt);
    const response = await result.response;
    setConversation([
      ...conversation,
      { role: "user", parts: prompt },
      { role: "model", parts: response.text() },
    ]);
    setIsButtonDisabled(false);
  }

  const handleClick = (event) => {
    if (event.key === "Enter") {
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
      </div>
    </div>
  );
};

export default Chat;
