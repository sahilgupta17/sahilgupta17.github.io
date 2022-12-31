import React from "react";
import styles from "./SkillsDisplay.module.css";
import SkillsIcon from "../SkillsIcon/SkillsIcon";

const SkillsDisplay = (props) => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>{props.data.type}</span>
      <div className={styles.skillsContainer}>
        {props.data.skills.map((skill) => (
          <SkillsIcon name={skill.name} alt={skill.alt} logo={skill.logo} />
        ))}
      </div>
    </div>
  );
};

export default SkillsDisplay;
