import React from "react";
import styles from "./SkillsIcon.module.css";

const SkillsIcon = (props) => {
  return (
    <div className={styles.container}>
      <img
        className={styles.iconImg}
        src={require(`../../assets/images/skills/${props.logo}.webp`)}
        alt={props.alt}
      />
      <span className={styles.skillName}>{props.name}</span>
    </div>
  );
};

export default SkillsIcon;
