// src/components/CustomCursor.jsx
import React, { useEffect, useRef } from "react";
import "./CustomCursor.css";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const trailRef = useRef([]);
  const trailLength = 100;

  useEffect(() => {
    const cursor = cursorRef.current;

    let mouseX = 0,
        mouseY = 0;
    let isMoving = false;
    let scale = 1; //controls cursor scale
  
    // Initialize trail positions and DOM elements
    const trailPositions = Array.from({ length: trailLength }, () => ({ x: 0, y: 0 }));
    const trailDots = Array.from({ length: trailLength }, () => {
      const dot = document.createElement("div");
      dot.className = "cursor-trail";
      document.body.appendChild(dot);
      return dot;
    });
    trailRef.current = trailDots;
  
    const updatePosition = (e) => {
      isMoving = true;
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
  
    const animate = () => {
      requestAnimationFrame(animate);
  
      // ✅ Combined position and scale
      cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) scale(${scale})`;
  
      trailPositions[0] = { x: mouseX, y: mouseY };
      for (let i = 1; i < trailLength; i++) {
        trailPositions[i].x += (trailPositions[i - 1].x - trailPositions[i].x) * 0.35;
        trailPositions[i].y += (trailPositions[i - 1].y - trailPositions[i].y) * 0.35;
  
        const dot = trailDots[i];
        dot.style.left = `${trailPositions[i].x}px`;
        dot.style.top = `${trailPositions[i].y}px`;
        dot.style.opacity = isMoving ? `${1 - i / trailLength}` : "0";
      }
  
      for (let i = trailDots.length - 1; i > 0; i--) {
        const prev = trailDots[i - 1];
        const curr = trailDots[i];
        curr.style.left = `${parseFloat(prev.style.left || 0) - 1}px`;
        curr.style.top = `${parseFloat(prev.style.top || 0) - 1}px`;
        curr.style.opacity = isMoving ? `${1 - i / trailLength}` : "0";
      }
  
      isMoving = false;
    };
  
    animate();
    window.addEventListener("mousemove", updatePosition);
  
    //Grow/shrink functions now just adjust scale
    const growCursor = () => {
      scale = 3;
    };
    const shrinkCursor = () => {
      scale = 1;
    };
  
    const clickableElements = document.querySelectorAll("a, button, .clickable");
    clickableElements.forEach((el) => {
      el.addEventListener("mouseenter", growCursor);
      el.addEventListener("mouseleave", shrinkCursor);
    });
  
    return () => {
      window.removeEventListener("mousemove", updatePosition);
      trailDots.forEach((dot) => dot.remove());
      clickableElements.forEach((el) => {
        el.removeEventListener("mouseenter", growCursor);
        el.removeEventListener("mouseleave", shrinkCursor);
      });
    };
  }, []);
  

  return <div className="custom-cursor" ref={cursorRef}></div>;
};

export default CustomCursor;


