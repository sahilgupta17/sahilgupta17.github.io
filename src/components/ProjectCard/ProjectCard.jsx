import React from "react";
import styles from "./ProjectCard.module.css";
import TechStackBar from "../TechStackBar/TechStackBar";
import DeployBar from "../DeployBar/DeployBar";
import { ThemeContext } from "../../App";

const ProjectCard = (props) => {
  const { isDarkMode } = React.useContext(ThemeContext);

  return (
    <div
      className={styles.container}
      style={{
        backgroundColor: isDarkMode ? "#191919" : "#fff",
        boxShadow: isDarkMode
          ? "rgba(0, 0, 0, 1) 0px 20px 30px"
          : "rgba(0, 0, 0, 0.5) 0px 5px 10px",
      }}
    >
      <img
        className={styles.projectImg}
        src={require(`../../assets/images/projects/${props.data.image}`)}
        alt={props.data.title}
      />

      <div className={styles.header}>
        <h2
          className={styles.title}
          style={{
            color: isDarkMode ? "white" : "#334155",
            opacity: isDarkMode ? 0.8 : 1,
          }}
        >
          {props.data.title}
        </h2>
        <DeployBar data={props.data} />
      </div>

      <div>
        <span
          className={styles.description}
          style={{
            color: isDarkMode ? "white" : "#334155",
            opacity: isDarkMode ? 0.8 : 1,
          }}
        >
          {props.data.description}
        </span>
      </div>
      <TechStackBar data={props.data} />
    </div>
  );
};

export default ProjectCard;
