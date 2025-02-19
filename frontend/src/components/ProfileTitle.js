import React from "react";
import "../css/ProfileTitle.css"; 
import TypingEffect from "./TypingEffect.js";

const ProfileTitle = ({ title, imageSrc, altText }) => {
  const textArray = [
    "Web",
    "Frontend",
    "UI/UX",
    "Full-Stack"
  ];

  return (
    <div className="profile-title">
      <img src={imageSrc} alt={altText} className="profile-image" />
      <h2 className="profile-title-text">{title}</h2>

      <h2>
        <TypingEffect textArray={textArray} />
       Developer</h2>
    </div>
  );
};

export default ProfileTitle;
