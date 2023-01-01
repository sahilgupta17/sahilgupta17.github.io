import React from "react";
import { ThemeContext } from "../../App";
import ExperienceCard from "../../components/ExperienceCard/ExperienceCard";
import ExperienceJSON from "../../data/Experience.json";
import Header from "../../components/Header/Header";
import styles from "./Experience.module.css";

const Experience = () => {
  const { isDarkMode, toggleTheme } = React.useContext(ThemeContext);

  return (
    <div
      className={styles.container}
      style={{ backgroundColor: isDarkMode ? "#121212" : "#f9f9f9" }}
    >
      <Header title="Experience" />
      {ExperienceJSON.map((experience, index) => (
        <ExperienceCard key={index} data={experience} />
      ))}
    </div>
  );
};
export default Experience;
