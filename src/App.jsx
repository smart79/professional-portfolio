// src/App.jsx
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
   <>
    <Navbar />
    <div className="App">
      {/* Background Video */}
      <video
        className="background-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Foreground Content */}
      <div className="content">
        <h1>STEPHEN MARTINEZ</h1>
        <p>Full Stack Web Developer | Software Engineer | React & Angular</p>
      </div>
    </div>
   </> 
  );
}

export default App;


