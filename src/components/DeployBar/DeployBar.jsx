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
        style={{
          color: isDarkMode ? "white" : "black",
        }}
        className={styles.projectIcon}
      />
    ),
    gitHubUrl: (
      <FaGithub
        className={styles.projectIcon}
        style={{
          color: isDarkMode ? "white" : "black",
        }}
      />
    ),
    youtube: (
      <FaYoutube
        className={styles.projectIcon}
        style={{
          color: isDarkMode ? "white" : "black",
        }}
      />
    ),
    appStore: (
      <FaAppStoreIos
        className={styles.projectIcon}
        style={{
          color: isDarkMode ? "white" : "black",
        }}
      />
    ),
    googlePlayStore: (
      <FaGooglePlay
        className={styles.projectIcon}
        style={{
          color: isDarkMode ? "white" : "black",
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
        .map((location, index) => {
          return (
            <a
              key={index}
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
