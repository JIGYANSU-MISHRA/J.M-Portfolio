// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Hero.css";
import heroimg from "../../assets/images/Photo1.jpg";
import TextChange from "./TextChange";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div id="HeroSection" className="hero-container">
      <div className="home-img" data-aos="fade-right">
        <img src={heroimg} alt="Jigyansu Mishra" />
      </div>
      <div className="text-section1" data-aos="fade-left">
        <h3>Hi, My Name</h3>
        <h1>Jigyansu Mishra</h1>
        <h3>
          And I'm a <TextChange />
        </h3>
        <p>
          I am a passionate Software Developer with hands-on experience in
          building dynamic and responsive web applications using modern
          JavaScript frameworks like React. With a strong foundation in computer
          science, I love transforming ideas into intuitive and engaging user
          experiences. My goal is to continue growing as a developer, contribute
          to impactful projects, and stay updated with the ever-evolving tech
          landscape.
        </p>
        <div className="social-icons">
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
        <a
          href="https://drive.google.com/file/d/1PiCs0fvQZdX32XvLvmeIHAlK8fSK0pM2/view?usp=sharing"
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
