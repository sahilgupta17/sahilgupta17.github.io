import React from "react";
import Header from "../../components/Header/Header";
import SkillsDisplay from "../../components/SkillsDisplay/SkillsDisplay";
import SkillsJson from "../../data/Skills.json";
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
          {SkillsJson.map((category) => (
            <SkillsDisplay data={category} />
          ))}
        </div>
        <SkillSphere />
      </div>
    </div>
  );
};
export default Skills;
