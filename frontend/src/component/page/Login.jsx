import React from "react";
import { useState } from "react";
import {useNavigate} from "react-router-dom";
import "../../style/Login-signup.css";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import ErrorMessage from "./ErrorMessage";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  let [disableButton, setDisableButton] = useState(false);
  let [errMessage, setErrMessage] = useState("");

  const handleInputData = (event) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const navigate = useNavigate();
  const auth = getAuth();
  const firebaseApiCall = (event) => {
    setDisableButton(true);
    event.preventDefault();
    signInWithEmailAndPassword(auth, formData.username, formData.password)
      .then((userCredential) => {
        // Signed in
        // const user = userCredential.user;
        setDisableButton(false);
        setErrMessage("Login successful");
        navigate('/');
        // console.log(user);
        // ...
      })
      .catch((error) => {
        setDisableButton(false);
        setErrMessage(error.message);
        console.log(error.message);
      });
  };

  return (
    <div className="login-body">
      <ErrorMessage message={errMessage} />
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form className="login-page" onSubmit={firebaseApiCall}>
        <h3>Login Here</h3>

        <label className="log-sign-label" htmlFor="username">E-mail</label>
        <input className="log-sign-input"
          type="email"
          placeholder="Email"
          id="username"
          autoComplete="username"
          value={formData.username}
          onChange={handleInputData}
          required
        />

        <label className="log-sign-label" htmlFor="password">Password</label>
        <input className="log-sign-input"
          type="password"
          placeholder="Password"
          id="password"
          autoComplete="current-password"
          value={formData.password}
          onChange={handleInputData}
          required
        />

        <button id="login" disabled={disableButton}>Log In</button>
      </form>
    </div>
  );
};

export default Login;
