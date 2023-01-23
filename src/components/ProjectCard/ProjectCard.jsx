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
      style={{
        backgroundColor: isDarkMode ? "#202020" : "#fff",
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
        <div className={styles.linksContainer}>
          {props.data.liveUrl && (
            <a href={`${props.data.liveUrl}`} target="_blank" rel="noreferrer">
              <IoRocketSharp
                className={styles.projectIcon}
                style={{
                  color: isDarkMode ? "white" : "black",
                  opacity: 0.8,
                }}
              />
            </a>
          )}
          {props.data.gitHubUrl && (
            <a
              href={`${props.data.gitHubUrl}`}
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub
                className={styles.projectIcon}
                style={{
                  color: isDarkMode ? "white" : "black",
                  opacity: 0.8,
                }}
              />
            </a>
          )}

          {props.data.youtube && (
            <a href={`${props.data.youtube}`} target="_blank" rel="noreferrer">
              <FaYoutube
                className={styles.projectIcon}
                style={{
                  color: isDarkMode ? "white" : "black",
                  opacity: 0.8,
                }}
              />
            </a>
          )}
          {props.data.appStore && (
            <a href={`${props.data.appStore}`} target="_blank" rel="noreferrer">
              <FaAppStoreIos
                className={styles.projectIcon}
                style={{
                  color: isDarkMode ? "white" : "black",
                  opacity: 0.8,
                }}
              />
            </a>
          )}
          {props.data.googlePlayStore && (
            <a
              href={`${props.data.googlePlayStore}`}
              target="_blank"
              rel="noreferrer"
            >
              <FaGooglePlay
                className={styles.projectIcon}
                style={{
                  color: isDarkMode ? "white" : "black",
                  opacity: 0.8,
                }}
              />
            </a>
          )}
        </div>
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
      <div className={styles.techStackContainer}>
        {props.data.techStack.map((skill, index) => (
          <div
            className={styles.skillIcon}
            style={{
              backgroundColor: isDarkMode ? "#303030" : "#E0F2FE",
              border: isDarkMode ? "1px solid #141414" : "0.5px solid #0EA5E9",
            }}
            key={index}
          >
            <span
              style={{
                color: isDarkMode ? "white" : "#0EA5E9",
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
