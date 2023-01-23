import React from "react";
import styles from "./ProjectCard.module.css";
import {
  FaGithub,
  FaYoutube,
  FaAppStoreIos,
  FaGooglePlay,
} from "react-icons/fa";
import { IoRocketSharp } from "react-icons/io5";

import { ThemeContext } from "../../App";

const ProjectCard = (props) => {
  const { isDarkMode } = React.useContext(ThemeContext);

  return (
    <div
      className={styles.container}
      style={{ backgroundColor: isDarkMode ? "#090909" : "#fff" }}
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
            color: isDarkMode ? "white" : "black",
            opacity: isDarkMode ? 0.8 : 1,
          }}
        >
          {props.data.title}
        </h2>
        <div className={styles.linksContainer}>
          {props.data.liveUrl && (
            <a
              href="https://github.com/sahilgupta17"
              target="_blank"
              rel="noreferrer"
            >
              <IoRocketSharp className={styles.projectIcon} />
            </a>
          )}
          {props.data.gitHubUrl && (
            <a
              href="https://github.com/sahilgupta17"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className={styles.projectIcon} />
            </a>
          )}

          {props.data.youtube && (
            <a
              href="https://github.com/sahilgupta17"
              target="_blank"
              rel="noreferrer"
            >
              <FaYoutube className={styles.projectIcon} />
            </a>
          )}
          {props.data.appStore && (
            <a
              href="https://github.com/sahilgupta17"
              target="_blank"
              rel="noreferrer"
            >
              <FaAppStoreIos className={styles.projectIcon} />
            </a>
          )}
          {props.data.googlePlayStore && (
            <a
              href="https://github.com/sahilgupta17"
              target="_blank"
              rel="noreferrer"
            >
              <FaGooglePlay className={styles.projectIcon} />
            </a>
          )}
        </div>
      </div>

      <div>
        <span
          style={{
            color: isDarkMode ? "white" : "black",
            opacity: isDarkMode ? 0.8 : 1,
          }}
        >
          {props.data.description}
        </span>
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
  );
};

export default ProjectCard;
