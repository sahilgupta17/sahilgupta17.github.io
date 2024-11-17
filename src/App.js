import React, { useState, Suspense, lazy } from "react";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import { Spinner } from "react-bootstrap";
import "./App.css";

const Home = lazy(() => import("./pages/Home/Home"));
const Skills = lazy(() => import("./pages/Skills/Skills"));
const Experience = lazy(() => import("./pages/Experience/Experience"));
const Projects = lazy(() => import("./pages/Projects/Projects"));
const Leadership = lazy(() => import("./pages/Leadership/Leadership"));
const Achievements = lazy(() => import("./pages/Achievements/Achievements"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));

const Loading = () => {
  return (
    <div
      className="center outer-structure"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <Spinner animation="border" variant="dark" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};

export const ThemeContext = React.createContext(null);

const App = () => {
  const [currentTab, setCurrentTab] = useState("home");
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const renderSwitch = (param) => {
    switch (param) {
      case "home":
        return <Home />;
      case "skills":
        return <Skills />;
      case "experience":
        return <Experience />;
      case "projects":
        return <Projects />;
      case "leadership":
        return <Leadership />;
      case "achievements":
        return <Achievements />;
      default:
        return <NotFound />;
    }
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <div className="App">
        <NavigationBar currentTab={currentTab} setCurrentTab={setCurrentTab} />
        <Suspense fallback={Loading()}>{renderSwitch(currentTab)}</Suspense>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
