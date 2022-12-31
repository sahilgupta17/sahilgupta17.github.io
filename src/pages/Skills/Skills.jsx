import React from "react";
import SkillsSphere from "../../components/SkillsSphere/SkillsSphere";
import { ThemeContext } from "../../App";
import styles from "./Skills.module.css";

const Skills = () => {
  const { isDarkMode, toggleTheme } = React.useContext(ThemeContext);
  return (
    <div className={styles.container}>
      <div className={styles.skillsImageContainer}></div>
      <SkillsSphere className={styles.skillsSphere} />
    </div>
  );
};
export default Skills;
