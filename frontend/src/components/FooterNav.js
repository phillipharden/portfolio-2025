import React from "react";
import { Link } from "react-router-dom";


import { AiFillHome } from "react-icons/ai";
import { FaInfo } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


import "../css/FooterNav.css";

const FooterNav = () => {
  return (
    <div className="footer-nav">
      <div className="footer-nav-body">
        <Link to="/Home" className="footer-nav-link">
          <AiFillHome className="footer-nav-icon" />
          <p className="footer-nav-text">Home</p>
        </Link>
        <Link to="/About" className="footer-nav-link">
          <FaInfo className="footer-nav-icon" />
          <p className="footer-nav-text">About</p>
        </Link>
        <Link to="/Projects" className="footer-nav-link">
          <FaCode className="footer-nav-icon" />
          <p className="footer-nav-text">Projects</p>
        </Link>
        <Link to="/Contact" className="footer-nav-link">
          <MdEmail className="footer-nav-icon" />
          <p className="footer-nav-text">Contact</p>
        </Link>
       
       
      </div>
    </div>
  );
};

export default FooterNav;
