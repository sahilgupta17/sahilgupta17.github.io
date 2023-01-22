import React from "react";
import Header from "../../components/Header/Header";
import SkillsDisplay from "../../components/SkillsDisplay/SkillsDisplay";
import SkillsJSON from "../../data/Skills.json";
import WordCloud from "../../components/WordCloud/WordCloud";
import { ThemeContext } from "../../App";
import styles from "./Skills.module.css";

const Skills = () => {
  const { isDarkMode } = React.useContext(ThemeContext);

  return (
    <div
      className={styles.container}
      style={{ backgroundColor: isDarkMode ? "#121212" : "#f9f9f9" }}
    >
      <Header title="Skills" />
      <div className={styles.content}>
        <div className={styles.leftComponentContainer}>
          {SkillsJSON.map((category) => (
            <SkillsDisplay data={category} />
          ))}
        </div>
        <WordCloud />
      </div>
    </div>
  );
};
export default Skills;
