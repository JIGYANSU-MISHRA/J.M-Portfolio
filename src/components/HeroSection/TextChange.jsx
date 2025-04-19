// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import "./TextChange.css";

const TextChange = () => {
  const phrases = [
    { text: "Software Engineer", color: "#e6b918" },
    { text: "Web Developer", color: "#e6b918" },
    { text: "UI/UX Designer", color: "#e6b918" },
    { text: "Photographer", color: "#e6b918" },
  ];

  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setCurrentPhrase((prevPhrase) => (prevPhrase + 1) % phrases.length);
        setFadeIn(true);
      }, 500);
    }, 3000); // Increased interval for better readability

    return () => clearInterval(interval);
  }, [phrases.length]);

  return (
    <span
      className={`text-change ${fadeIn ? "fade-in" : "fade-out"}`}
      style={{ color: phrases[currentPhrase].color }}
    >
      {phrases[currentPhrase].text}
    </span>
  );
};

export default TextChange;