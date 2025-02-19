import React from "react";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { FaInfo } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import ProfileTitle from "./ProfileTitle.js";
import PhillipImg from "../images/phillip.png";
import "../css/Sidebar.css";

const Sidebar = (props) => {
  return (
    <div className="sidebar">
      <div className="sidebar-body">
        <div className="sidebar-logo-container">
          <img src={props.ImgUrl} alt={props.ImgAlt} className="sidebar-logo" />
        </div>
        <h1 className="brand-font m-3">{props.Title}</h1>

        <ProfileTitle
          title="Phillip"
          imageSrc={PhillipImg}
          altText="Profile picture of Phillip Harden"
        />

        <Link to="/Home" className="sidebar-link">
          <AiFillHome className="sidebar-icon" />
          <p className="sidebar-text">Home</p>
        </Link>
        <Link to="/About" className="sidebar-link">
          <FaInfo className="sidebar-icon" />
          <p className="sidebar-text">About</p>
        </Link>
        <Link to="/Projects" className="sidebar-link">
          <FaCode className="sidebar-icon" />
          <p className="sidebar-text">Projects</p>
        </Link>
        <Link to="/Contact" className="sidebar-link">
          <MdEmail className="sidebar-icon" />
          <p className="sidebar-text">Contact</p>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
