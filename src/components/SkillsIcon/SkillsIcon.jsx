import React from "react";
import styles from "./SkillsIcon.module.css";
import { ThemeContext } from "../../App";

const SkillsIcon = (props) => {
  const { isDarkMode } = React.useContext(ThemeContext);
  return (
    <div
      className={styles.container}
      style={{
        backgroundColor: isDarkMode ? "#303030" : "#fff",
        boxShadow: isDarkMode
          ? "rgba(0, 0, 0, 0.8) 0px 5px 10px"
          : "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
      }}
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
          opacity: isDarkMode ? 0.8 : 1,
        }}
      >
        {props.name}
      </span>
    </div>
  );
};

export default SkillsIcon;
