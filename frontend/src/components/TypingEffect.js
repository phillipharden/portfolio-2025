import React, { useState, useEffect } from "react";
import "../css/TypingEffect.css";

const TypingEffect = ({
  textArray,
  typingSpeed = 200,
  deletingSpeed = 100,
  pauseTime = 2000,
}) => {
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let timeoutId;

    if (!deleting) {
      if (currentText === textArray[index]) {
        setTimeout(() => setDeleting(true), pauseTime); // Pause before deleting
      } else {
        timeoutId = setTimeout(() => {
          setCurrentText(textArray[index].substring(0, currentText.length + 1));
        }, typingSpeed);
      }
    } else {
      if (currentText === "") {
        setDeleting(false);
        setIndex((prevIndex) => (prevIndex + 1) % textArray.length);
      } else {
        timeoutId = setTimeout(() => {
          setCurrentText((prev) => prev.slice(0, -1));
        }, deletingSpeed);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [
    currentText,
    deleting,
    index,
    textArray,
    typingSpeed,
    deletingSpeed,
    pauseTime,
  ]);

  return (
    <div className="typing-container">
      <span>{currentText}</span>
      <span className="cursor">|</span>
    </div>
  );
};

export default TypingEffect;
