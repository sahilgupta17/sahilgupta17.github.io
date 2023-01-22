import React from "react";
import Header from "../../components/Header/Header";
import styles from "./Projects.module.css";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import ProjectsData from "../../data/Projects.json";
import { ThemeContext } from "../../App";

const Projects = () => {
  const { isDarkMode } = React.useContext(ThemeContext);
  return (
    <div
      className={styles.container}
      style={{ backgroundColor: isDarkMode ? "#121212" : "#f9f9f9" }}
    >
      <Header title="Projects" />
      <div className={styles.projectsContainer}>
        {ProjectsData.map((project, index) => (
          <ProjectCard data={project} key={index} />
        ))}
      </div>
    </div>
  );
};
export default Projects;
