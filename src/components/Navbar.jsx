import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/temp-logo.png";
import { FaBars } from "react-icons/fa";

export const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="nav">
      <div className="navbar-logo-container">
        <Link to="/">
          <img className="logo" src={logo} alt="Venturesque Logo" />
        </Link>
      </div>
      <FaBars
        className="toggle-button"
        size={32}
        onClick={() => setToggleMenu(!toggleMenu)}
      />
      <div className={`navbar-links-container ${toggleMenu ? "active" : ""}`}>
        <ul className="navbar-links">
          <li className="nav-link-item">
            <Link
              className="nav-link"
              to="/about"
              onClick={() => setToggleMenu(!toggleMenu)}
            >
              About Us
            </Link>
          </li>
          <li className="nav-link-item">
            <Link
              className="nav-link"
              to="/auth/login"
              onClick={() => setToggleMenu(!toggleMenu)}
            >
              Login
            </Link>
          </li>
          <li className="nav-link-item">
            <Link
              className="nav-link"
              to="/auth/signup"
              onClick={() => setToggleMenu(!toggleMenu)}
            >
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </div>

    // <div className="nav-container">
    //   <div className="home-link">
    //     <Link to="/">
    //       <img className="logo" src={logo} alt="App Logo" />
    //     </Link>
    //   </div>
    //   <FaBars
    //     className="toggle-button"
    //     size={32}
    //     onClick={() => setToggleMenu(!toggleMenu)}
    //   />
    //   <ul className={`auth-nav-container ${toggleMenu ? "active" : ""}`}>
    //     <li>
    //       <Link className="auth-nav-link login-button" to="/about">
    //         About Us
    //       </Link>
    //     </li>
    //     {/* <li>
    //       <Link className="auth-nav-link login-button" to="/testing">
    //         Testing
    //       </Link>
    //     </li>
    //     <li>
    //       <Link className="auth-nav-link login-button" to="/results-layout">
    //         Layout
    //       </Link>
    //     </li> */}
    //     <li>
    //       <Link
    //         className="auth-nav-link login-button modal-trigger"
    //         data-target="modal-login"
    //         to="/auth/login"
    //       >
    //         Login
    //       </Link>
    //     </li>
    //     <li className="nav-button">
    //       <Link className="link-button" to="/auth/signup">
    //         Sign Up
    //       </Link>
    //     </li>
    //   </ul>
    // </div>
  );
};
