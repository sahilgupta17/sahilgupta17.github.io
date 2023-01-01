import React from "react";
import styles from "./SkillsIcon.module.css";
import { ThemeContext } from "../../App";

const SkillsIcon = (props) => {
  const { isDarkMode, toggleTheme } = React.useContext(ThemeContext);
  return (
    <div
      className={styles.container}
      style={{ backgroundColor: isDarkMode ? "#303030" : "#fff" }}
    >
      <img
        className={styles.iconImg}
        src={require(`../../assets/images/skills/${props.logo}.webp`)}
        alt={props.alt}
      />
      <span
        className={styles.skillName}
        style={{
          color: isDarkMode ? "white" : "black",
          opacity: isDarkMode ? 0.9 : 1,
        }}
      >
        {props.name}
      </span>
    </div>
  );
};

export default SkillsIcon;
