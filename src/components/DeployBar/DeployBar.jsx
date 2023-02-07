import React from "react";
import {
  FaAppStoreIos,
  FaGithub,
  FaGooglePlay,
  FaYoutube,
} from "react-icons/fa";
import { IoRocketSharp } from "react-icons/io5";
import styles from "./DeployBar.module.css";
import { ThemeContext } from "../../App";

const DeployBar = (props) => {
  const { isDarkMode } = React.useContext(ThemeContext);

  return (
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
        <a href={`${props.data.gitHubUrl}`} target="_blank" rel="noreferrer">
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
  );
};

export default DeployBar;
