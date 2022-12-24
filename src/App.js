import React, { useState, Suspense, lazy } from "react";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import { Spinner } from "react-bootstrap";

const Home = lazy(() => import("./pages/Home/Home"));
const Skills = lazy(() => import("./pages/Skills/Skills"));
const Projects = lazy(() => import("./pages/Projects/Projects"));
const Experience = lazy(() => import("./pages/Experience/Experience"));
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

const App = () => {
  const [currentTab, setCurrentTab] = useState("home");

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
    <div className="App">
      <NavigationBar currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <Suspense fallback={Loading()}>{renderSwitch(currentTab)}</Suspense>
    </div>
  );
};

export default App;
