import React from "react";
import Header from "../../components/Header/Header";
import SkillsIcon from "../../components/SkillsIcon/SkillsIcon";
import SkillSphere from "../../components/SkillSphere/SkillSphere";
import { ThemeContext } from "../../App";
import styles from "./Skills.module.css";

const Skills = () => {
  const { isDarkMode, toggleTheme } = React.useContext(ThemeContext);

  return (
    <div className={styles.container}>
      <Header title="Skills" />
      <div className={styles.content}>
        <div className={styles.leftComponentContainer}>
          <SkillsIcon
            name="TypeScript"
            logo="TypeScript.webp"
            alt="TypeScript Logo"
          />
        </div>
        <SkillSphere />
      </div>
    </div>
  );
};
export default Skills;
