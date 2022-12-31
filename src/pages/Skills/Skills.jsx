import React from "react";
import Header from "../../components/Header/Header";
import SkillSphere from "../../components/SkillSphere/SkillSphere";
import { ThemeContext } from "../../App";
import styles from "./Skills.module.css";

const Skills = () => {
  const { isDarkMode, toggleTheme } = React.useContext(ThemeContext);

  return (
    <div className={styles.container}>
      <Header title="Skills" />
      <div className={styles.skillsImageContainer}></div>
      <SkillSphere />
    </div>
  );
};
export default Skills;
