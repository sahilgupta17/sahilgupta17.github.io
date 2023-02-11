import React from "react";
import { ThemeContext } from "../../App";
import ExperienceCard from "../../components/ExperienceCard/ExperienceCard";
import { MdWork, MdWorkOutline } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import ExperienceJSON from "../../data/Experience.json";
import Header from "../../components/Header/Header";
import "react-vertical-timeline-component/style.min.css";
import styles from "./Experience.module.css";

const Experience = () => {
  const { isDarkMode, toggleTheme } = React.useContext(ThemeContext);
  const darkThemeContentArrowStyle = {
    borderRight: "7px solid  rgb(48, 48, 48)",
  };
  const lightThemeContentArrowStyle = {
    borderRight: "7px solid  rgb(249, 249, 249)",
  };

  return (
    <div
      className={styles.container}
      style={{ backgroundColor: isDarkMode ? "#121212" : "#3da3d5" }}
    >
      <Header title="Experience" />
      <VerticalTimeline>
        {ExperienceJSON.map((experience, index) => (
          <VerticalTimelineElement
            key={index}
            date={experience.duration}
            dateClassName="date"
            icon={<MdWork />}
            iconStyle={{
              background: "#06D6A0",
            }}
            contentStyle={{
              background: isDarkMode ? "#303030" : "#fff",
              color: isDarkMode ? "white" : "black",
              opacity: isDarkMode ? 0.8 : 1,
              boxShadow: "0 0 0",
            }}
            contentArrowStyle={
              isDarkMode
                ? darkThemeContentArrowStyle
                : lightThemeContentArrowStyle
            }
          >
            <ExperienceCard key={index} data={experience} />
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};
export default Experience;
