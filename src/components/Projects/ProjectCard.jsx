// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import bannerImg from "../../assets/images/Frontend.png"; 
import "./ProjectCard.css";

const ProjectCard = ({ title, main, demoUrl, sourceCodeUrl, image = bannerImg }) => {
  return (
    <div className="project-card">
      <img src={image} alt="Project banner" />
      <h3 className="project-title">{title}</h3>
      <p className="project-main">{main}</p>
      <div className="button-container">
        <a
          href={demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="project-button"
        >
          Website
        </a>
        <a
          href={sourceCodeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="project-button"
        >
          Source Code
        </a>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  main: PropTypes.string.isRequired,
  demoUrl: PropTypes.string.isRequired,
  sourceCodeUrl: PropTypes.string.isRequired,
  image: PropTypes.string,
};

export default ProjectCard;