import React from "react";
import styles from "./TechStackBar.module.css";
import { ThemeContext } from "../../App";

const TechStackBar = (props) => {
  const { isDarkMode } = React.useContext(ThemeContext);

  return (
    <div className={styles.techStackContainer}>
      {props.data.map((skill, index) => (
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
  );
};

export default TechStackBar;
