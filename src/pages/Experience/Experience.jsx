import React from "react";
import { ThemeContext } from "../../App";
import ExperienceCard from "../../components/ExperienceCard/ExperienceCard";
import { MdWork } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import ExperienceJSON from "../../data/Experience.json";
import Header from "../../components/Header/Header";
import "react-vertical-timeline-component/style.min.css";
import styles from "./Experience.module.css";
import { sortExperience } from "../../utils/helper";
import { calcDuration } from "../../utils/helper";

const Experience = () => {
  const { isDarkMode } = React.useContext(ThemeContext);
  const [activeCardId, setActiveCardId] = React.useState(null);
  const darkThemeContentArrowStyle = {
    borderRight: "7px solid  rgb(25, 25, 25)",
  };
  const lightThemeContentArrowStyle = {
    borderRight: "7px solid  rgb(249, 249, 249)",
  };

  return (
    <div
      className={styles.container}
      style={{ backgroundColor: isDarkMode ? "#121212" : "#f9f9f9" }}
    >
      <Header title="Experience" />
      <VerticalTimeline>
        {ExperienceJSON.map((experience, index) => (
          <VerticalTimelineElement
            key={index}
            date={`${experience.duration} • ${calcDuration(
              experience.duration
            )}`}
            dateClassName={isDarkMode ? styles.darkText : styles.lightText}
            icon={<MdWork />}
            iconStyle={{
              background: "#06D6A0",
            }}
            contentStyle={{
              background: isDarkMode ? "#191919" : "#fff",
              boxShadow: isDarkMode
                ? "rgba(0, 0, 0, 1) 0px 20px 30px"
                : "rgba(0, 0, 0, 0.5) 0px 5px 10px",
            }}
            contentArrowStyle={
              isDarkMode
                ? darkThemeContentArrowStyle
                : lightThemeContentArrowStyle
            }
          >
            <ExperienceCard
              key={index}
              id={experience.id}
              data={experience}
              activeCardId={activeCardId}
              setActiveCardId={setActiveCardId}
            />
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};
export default Experience;
