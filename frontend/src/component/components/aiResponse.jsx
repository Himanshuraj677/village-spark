import React from "react";

const AiResponse = (props) => {
  return (
    <div>
      {props.response && (
        <div>
          <h3 className="ai">AI</h3>
          <p className="ai-response">{props.response}</p>
        </div>
      )}
    </div>
  );
};

export default AiResponse;
