// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import bannerImg from "../../assets/images/Frontend.png"; 
import "./ProjectCard.css";

const ProjectCard = ({ title, main, techStack = [], demoUrl, sourceCodeUrl, image = bannerImg, category = "web" }) => {
  const handleSourceCodeClick = (e) => {
    if (!sourceCodeUrl || sourceCodeUrl.trim() === "") {
      e.preventDefault();
      alert("This project has no source code available as it is a freelancing/company project, so it is confidential.");
    }
  };

  const buttonLabel = category === "mobile" ? "App" : "Website";

  return (
    <div className="project-card">
      <div className="project-image-container">
        <img src={image} alt={`${title} project`} />
      </div>
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{main}</p>
        <div className="tech-stack">
          <span className="tech-stack-label">TechStack:</span>
          <div className="tech-stack-items">
            {techStack.map((tech, index) => (
              <span key={index} className="tech-item">{tech}</span>
            ))}
          </div>
        </div>
        <div className="button-container">
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-button"
            >
              {buttonLabel}
            </a>
          )}
          {sourceCodeUrl && sourceCodeUrl.trim() !== "" ? (
            <a
              href={sourceCodeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-button"
            >
              Source Code
            </a>
          ) : (
            <button
              onClick={handleSourceCodeClick}
              className="project-button"
            >
              Source Code
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  main: PropTypes.string.isRequired,
  techStack: PropTypes.arrayOf(PropTypes.string),
  demoUrl: PropTypes.string,
  sourceCodeUrl: PropTypes.string,
  image: PropTypes.string,
  category: PropTypes.string,
};

export default ProjectCard;