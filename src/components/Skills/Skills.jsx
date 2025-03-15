// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./Skills.css";
import { SKILLS } from "../../utils/data";
import SkillCard from "./SkillCard/SkillCard";
import SkillsInfoCard from "./SkillCard/SkillsInfoCard/SkillsInfoCard";

// Import images
import frontendIcon from "../../assets/images/Frontend.png";
import backendIcon from "../../assets/images/Backend.png";
import toolsIcon from "../../assets/images/Tools.png";
import softSkillIcon from "../../assets/images/SoftSkill.png";

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(
    SKILLS.length > 0 ? SKILLS[0] : null
  );

  const handleSelectSkill = (data) => {
    setSelectedSkill(data);
  };

  return (
    <section id="Skills" className="skills-container">
      <h5>Technical Skills</h5>
      <div className="skills-content">
        <div className="skills">
          {SKILLS.map((item) => (
            <SkillCard
              key={item.title}
              iconUrl={
                item.title === "Frontend"
                  ? frontendIcon
                  : item.title === "Backend"
                  ? backendIcon
                  : item.title === "Languages & Tools"
                  ? toolsIcon
                  : softSkillIcon
              }
              title={item.title}
              isActive={selectedSkill?.title === item.title}
              onClick={() => handleSelectSkill(item)}
            />
          ))}
        </div>
        <div className="skills-info">
          {selectedSkill && (
            <SkillsInfoCard
              heading={selectedSkill.title}
              skills={selectedSkill.skills}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;