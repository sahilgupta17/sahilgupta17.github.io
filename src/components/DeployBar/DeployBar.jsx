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

  const deployLocations = {
    liveUrl: (
      <IoRocketSharp
        className={styles.projectIcon}
        style={{
          color: isDarkMode ? "white" : "black",
          opacity: 0.8,
        }}
      />
    ),
    gitHubUrl: (
      <FaGithub
        className={styles.projectIcon}
        style={{
          color: isDarkMode ? "white" : "black",
          opacity: 0.8,
        }}
      />
    ),
    youtube: (
      <FaYoutube
        className={styles.projectIcon}
        style={{
          color: isDarkMode ? "white" : "black",
          opacity: 0.8,
        }}
      />
    ),
    appStore: (
      <FaAppStoreIos
        className={styles.projectIcon}
        style={{
          color: isDarkMode ? "white" : "black",
          opacity: 0.8,
        }}
      />
    ),
    googlePlayStore: (
      <FaGooglePlay
        className={styles.projectIcon}
        style={{
          color: isDarkMode ? "white" : "black",
          opacity: 0.8,
        }}
      />
    ),
  };

  return (
    <div className={styles.linksContainer}>
      {Object.keys(deployLocations)
        .filter((location) => {
          return props.data[location] ? true : false;
        })
        .map((location) => {
          return (
            <a
              href={`${props.data[location]}`}
              target="_blank"
              rel="noreferrer"
            >
              {deployLocations[location]}
            </a>
          );
        })}
    </div>
  );
};

export default DeployBar;
