import React from "react";
import "./css/Navbar.css";
import FinalLogo from './assets/Final.png'
function Navbar() {

  return (
    <header className="navbar">
      <a href="#" className="brand">
        <img src={FinalLogo} alt="Logo" className="logo" />
      </a>

      <div className="nav-right">
        <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Portfolio</a>
          <a href="#">Contact</a>
        </nav>

        <a href="#" className="login">Login</a>
      </div>
    </header>
  );
}

export default Navbar;
