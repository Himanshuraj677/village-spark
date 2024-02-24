import React, { useState } from "react";
import "../../style/Login-signup.css";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import ErrorMessage from "./ErrorMessage";
const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    password: "",
  });
  let [disableButton, setDisableButton] = useState(false);
  let [errMessage, setErrMessage] = useState("");

  const handleFormData = (event) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  
  const auth = getAuth();
  const navigate = useNavigate();
  const firebaseApiCall = (event) => {
    setDisableButton(() => (disableButton = true));
    event.preventDefault();
    createUserWithEmailAndPassword(auth, formData.username, formData.password)
      .then((userCredential) => {
        // Signed up
        setDisableButton(() => (disableButton = false));
        const user = userCredential.user;
        setErrMessage("Signup successful");
        navigate("/");
        updateProfile(user, {
          displayName: formData.name,
        });
        console.log(user);
        // ...
      })
      .catch((error) => {
        setDisableButton(() => (disableButton = false));
        setErrMessage(error.message);
        console.log(error.message);
        // ..
      });
  };

  return (
    <div className="signup-body">
      <ErrorMessage message={errMessage} />
      <form className="signup-page" onSubmit={firebaseApiCall}>
        <h3>Signup Here</h3>
        <label className="log-sign-label" htmlFor="name">Name</label>
        <input className="log-sign-input"
          type="text"
          placeholder="Enter your name"
          id="name"
          value={formData.name}
          onChange={handleFormData}
          required
        />

        <label className="log-sign-label" htmlFor="username">E-mail</label>
        <input className="log-sign-input"
          type="email"
          placeholder="Email"
          id="username"
          autoComplete="username"
          value={formData.username}
          onChange={handleFormData}
          required
        />

        <label className="log-sign-label" htmlFor="password">Password</label>
        <input className="log-sign-input"
          type="password"
          placeholder="Password"
          id="password"
          autoComplete="current-password"
          value={formData.password}
          onChange={handleFormData}
          required
        />

        <button id="signup" disabled={disableButton}>
          Sign up
        </button>
        <p className="login-link">
            Have an account? <Link to="/login">Login here</Link>
          </p>
      </form>
    </div>
  );
};

export default Signup;
