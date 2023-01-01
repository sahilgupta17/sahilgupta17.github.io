import React from "react";
import styles from "./SkillsDisplay.module.css";
import { ThemeContext } from "../../App";
import SkillsIcon from "../SkillsIcon/SkillsIcon";

const SkillsDisplay = (props) => {
  const { isDarkMode, toggleTheme } = React.useContext(ThemeContext);

  return (
    <div className={styles.container}>
      <span
        className={styles.title}
        style={{
          color: isDarkMode ? "#fff" : "#000",
          opacity: isDarkMode ? 0.8 : 1,
        }}
      >
        {props.data.type}
      </span>
      <div className={styles.skillsContainer}>
        {props.data.skills.map((skill, index) => (
          <SkillsIcon
            key={index}
            name={skill.name}
            alt={skill.alt}
            logo={skill.logo}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillsDisplay;
