import React from "react";
import styles from "./ProjectCard.module.css";
import { ThemeContext } from "../../App";

const ProjectCard = (props) => {
  const { isDarkMode } = React.useContext(ThemeContext);

  return (
    <div className={styles.container}>
      <img
        className={styles.projectImg}
        src={require(`../../assets/images/projects/${props.data.image}`)}
        alt={props.data.title}
      />

      <div className={styles.contentContainer}>
        <h3>{props.data.title}</h3>
        <div>
          <span>{props.data.description}</span>
        </div>
        <div className={styles.techStackContainer}>
          {props.data.techStack.map((skill, index) => (
            <div
              className={styles.skillIcon}
              style={{ backgroundColor: isDarkMode ? "#303030" : "#fff" }}
              key={index}
            >
              <span
                style={{
                  color: isDarkMode ? "white" : "black",
                  opacity: isDarkMode ? 0.8 : 1,
                }}
              >
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
