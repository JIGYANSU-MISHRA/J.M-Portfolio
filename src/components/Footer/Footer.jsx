import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-text">
          © 2025 .. J.M Portfolio .. Developed By Jigyansu Mishra
        </div>
        <div className="footer-icons">
          <span className="connect-text">Connect With Me</span>
          <a
            href="https://www.linkedin.com/in/jigyansu-mishra/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="icon" />
          </a>
          <a
            href="https://github.com/JIGYANSU-MISHRA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="icon" />
          </a>
          <a
            href="https://x.com/Jigyansu_08"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} className="icon" />
          </a>
          <a
            href="https://www.instagram.com/jigyansu_08/?next=%2F"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;