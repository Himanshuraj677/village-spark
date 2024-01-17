import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.ico";
import { getAuth, signOut } from "firebase/auth";

const Nav = (props) => {
  const logoutUser = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="nav-bar">
      <div className="logo">
        <Link to="/">
          <img className="logo-img" src={logo} alt="logo" />
        </Link>
      </div>
      <div className="flex-middle"></div>
      <div className="flex-end">
        <Link className="log-sign-link" to="/login">
          <button className="login-btn" disabled={props.isAuthenticated}>
            Login
          </button>
        </Link>
        <Link className="log-sign-link" to="/register">
          <button className="signup-btn" disabled={props.isAuthenticated}>
            Signup
          </button>
        </Link>
        <Link className="log-sign-link" to="/login">
          <button
            onClick={logoutUser}
            className="logout-btn"
            disabled={!(props.isAuthenticated)}
          >
            Logout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
