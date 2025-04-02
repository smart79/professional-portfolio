// src/components/Navbar.jsx
import React, { useState } from "react";
import "./Navbar.css";
import logo from "/public/images/logo.png"; // adjust if needed

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Top Left: Floating Logo */}
      <div className="floating-logo">
        <img src={logo} alt="Stephen Logo" />
      </div>

      {/* Top Right: Menu Toggle */}
      <div className="floating-menu-toggle">
        <button className={`menu-toggle ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
          <span className="bar top-bar"></span>
          <span className="bar middle-bar"></span>
          <span className="bar bottom-bar"></span>
        </button>

        <div className={`radial-menu ${isOpen ? "active" : ""}`}>
          <ul>
            <li style={{ '--i': 0 }}><a href="#projects" onClick={toggleMenu}>Projects</a></li>
            <li style={{ '--i': 1 }}><a href="#about" onClick={toggleMenu}>About</a></li>
            <li style={{ '--i': 2 }}><a href="#contact" onClick={toggleMenu}>Contact</a></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;





