import React from "react";
import "./css/Navbar.css";
import FinalLogo from './assets/Final.png';

function Navbar() {
  return (
    <header className="navbar">
      <a href="#" className="brand">
        <img src={FinalLogo} alt="Logo" className="logo" />
      </a>

      <div className="nav-right">
        <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#">Product</a>
          <a href="#">Pricing</a>
          <a href="#">About Us</a>
          <a href="#">Contact</a>
        </nav>
        <a href="#" className="login-btn">Log In</a>
      </div>
    </header>
  );
}

export default Navbar;
