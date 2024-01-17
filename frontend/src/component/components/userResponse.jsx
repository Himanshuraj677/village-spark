import React from "react";

const UserResponse = (props) => {
  return (
    <div>
      {props.response && (
        <div>
          <h3 className="user">You</h3>
          <p className="user-prompt">{props.response}</p>
        </div>
      )}
    </div>
  );
};

export default UserResponse;
