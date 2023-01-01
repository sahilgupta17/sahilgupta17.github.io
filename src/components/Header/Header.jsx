import React from "react";
import styles from "./Header.module.css";
import { ThemeContext } from "../../App";

const Header = (props) => {
  const { isDarkMode, toggleTheme } = React.useContext(ThemeContext);

  return (
    <div className={styles.header}>
      <h1
        className={styles.title}
        style={{
          color: isDarkMode ? "white" : "black",
          opacity: isDarkMode ? 0.8 : 1,
        }}
      >
        {props.title}
      </h1>
    </div>
  );
};

export default Header;
