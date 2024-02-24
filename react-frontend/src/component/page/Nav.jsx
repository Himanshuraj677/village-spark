import React, {useContext, useState} from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../img/logo.png";
import { getAuth, signOut } from "firebase/auth";
import { checkAuth } from "../../App";

const Nav = (props) => {
  const isAuthenticated = useContext(checkAuth);

  const [menuOpen, setMenuOpen] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const location = useLocation();
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

  return(
    <>
      <header className="header">
        <div className="nav-icon">
          <Link to="/home"><img src={logo} alt="logo" /></Link>
        </div>
        <div className="hamburg" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className="nav-menu">
          <ul>
            <Link to="/home" className={location.pathname === '/' ? 'active' : ''}><li>Home</li></Link>
            <Link to="/business" className={location.pathname.startsWith('/business') ? 'active' : ''}><li>Business</li></Link>
            <Link to="/farming" className={location.pathname.startsWith('/farming') ? 'active' : ''}><li>Farming</li></Link>
            <Link to="/job" className={location.pathname.startsWith('/job') ? 'active' : ''}><li>Job</li></Link>
            <Link to="/donation" className={location.pathname === '/donation' ? 'active' : ''}><li>Donate</li></Link>
            <Link to="/dashboard" className={location.pathname === '/dashboard' ? 'active' : ''}><li>Dashboard</li></Link>
          </ul>
        </nav>
        <div className="nav-button">
          <Link className="log-sign-link" to="/login">
            <button className="login-btn" disabled={isAuthenticated}>Login</button>
          </Link>
          <Link className="log-sign-link" to="/register">
            <button className="signup-btn" disabled={isAuthenticated}>Signup</button>
          </Link>
          <Link className="log-sign-link" to="/login">
            <button onClick={logoutUser} className="logout-btn" disabled={!(isAuthenticated)}>Logout</button>
          </Link>
        </div>
      </header>
  <div className={`mobile-menu-container ${menuOpen ? 'hide-menu' : ''}`}>
    <nav className="mobile-menu">
      <ul>
        <Link onClick={toggleMenu} to="/"><li>Home</li></Link>
        <Link onClick={toggleMenu} to="/business"><li>Business</li></Link>
        <Link onClick={toggleMenu} to="/farming"><li>Farming</li></Link>
        <Link onClick={toggleMenu} to="/job"><li>Job</li></Link>
        <Link onClick={toggleMenu} to="/donation"><li>Donation</li></Link>
        <Link onClick={toggleMenu} to="/dashboard"><li>Dashboard</li></Link>
      </ul>
    </nav>
  </div>
</>
  );
};

export default Nav;
