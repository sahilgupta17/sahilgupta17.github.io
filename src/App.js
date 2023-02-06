import React, { useState } from "react";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import "./App.css";

import Home from "./pages/Home/Home";
import Skills from "./pages/Skills/Skills";
import Experience from "./pages/Experience/Experience";
import Projects from "./pages/Projects/Projects";
// const Leadership = lazy(() => import("./pages/Leadership/Leadership"));
// const Achievements = lazy(() => import("./pages/Achievements/Achievements"));

export const ThemeContext = React.createContext(null);

const App = () => {
  const [currentTab, setCurrentTab] = useState("home");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <div className="App">
        <NavigationBar currentTab={currentTab} setCurrentTab={setCurrentTab} />
        <div className="scrollView">
          <Home />
          <Skills />
          <Experience />
          <Projects />
          {/* <Leadership />
          <Achievements /> */}
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
