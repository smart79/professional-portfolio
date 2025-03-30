// src/App.jsx
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
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

      <div className="content">
        <h1>Hello, I'm Stephen 👋</h1>
        <p>Welcome to my portfolio site.</p>
      </div>
    </div>
  );
}

export default App;

