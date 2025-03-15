// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import "./SkillCard.css";
const SkillCard = ({ title, iconUrl, isActive, onClick }) => {
  return (
    <div
      className={`skills-card ${isActive ? "active" : ""}`.trim()}
      onClick={() => onClick?.()}
      role="button"
      tabIndex={0}
    >
      
      <div className="skill-icon">
        
        <img
          src={iconUrl || "fallback-image.png"}
          alt={title || "Skill"}
        />
      </div>
      <span>{title}</span>
    </div>
  );
};
SkillCard.propTypes = {
  title: PropTypes.string.isRequired,
  iconUrl: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
};
SkillCard.defaultProps = { isActive: false, onClick: () => {} };
export default SkillCard;
