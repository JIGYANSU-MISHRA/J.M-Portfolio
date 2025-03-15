// eslint-disable-next-line no-unused-vars
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import "./Hero.css";
import heroimg from "../../assets/images/Photo1.jpg"; 
import TextChange from "./TextChange";

const HeroSection = () => {
  return (
    <div id="HeroSection" className="hero-container">
      <div className="home-img">
        <img src={heroimg} alt="Jigyansu Mishra" />
      </div>
      <div className="text-section1">
        <h3>Hi, My Name</h3> <h1>Jigyansu Mishra</h1>
        <h3>
          And I'm a <TextChange />
        </h3>
        <p>
          Proven track record in delivering high-quality projects, enhancing
          productivity, and driving innovation. Want to be a dedicated
          professional with extensive experience in Software Industries.
          Passionate about technology and committed to excellence.
        </p>
        <div className="social-icons">
          <a
            href="https://www.instagram.com/jigyansu_08/?next=%2F"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} className="icon" />
          </a>
          <a
            href="https://x.com/Jigyansu_08"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} className="icon" />
          </a>
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
        </div>
        <a
          href="https://drive.google.com/file/d/1ulDI1zbCzqXMZ2gwEptIIotRqCsVSnV6/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="contact-button">My Resume</button>
        </a>
      </div>
    </div>
  );
};

export default HeroSection;