// src/App.jsx
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import backgroundVideo from "./assets/videos/background.mp4";
import CustomCursor from "./components/CustomCursor";


function App() {
  return (
   <>
    <CustomCursor />
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
          <source src={backgroundVideo} type="video/mp4" />
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


