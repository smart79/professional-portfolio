// src/components/Navbar.jsx
import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/images/logo.png"; // adjust if needed

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Floating Logo (Top Left) */}
      <div className="floating-logo">
        <img src={logo} alt="Stephen Logo" />
      </div>

      {/* Floating Toggle + Menu (Top Right) */}
      <div className="floating-menu-toggle">
        <button
          className={`menu-toggle ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span className="bar top-bar"></span>
          <span className="bar middle-bar"></span>
          <span className="bar bottom-bar"></span>
        </button>

        <div className={`radial-menu ${isOpen ? "active" : ""}`}>
          <ul>
            <li style={{ "--angle": "-45deg", "--distance": "80px" }}>
              <a href="#projects" onClick={toggleMenu}>Projects</a>
            </li>
            <li style={{ "--angle": "0deg", "--distance": "80px" }}>
              <a href="#about" onClick={toggleMenu}>About</a>
            </li>
            <li style={{ "--angle": "45deg", "--distance": "80px" }}>
              <a href="#contact" onClick={toggleMenu}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;






