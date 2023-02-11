import React from "react";
import { Button } from "react-bootstrap";
import "react-vertical-timeline-component/style.min.css";
import DeployBar from "../DeployBar/DeployBar";
import TechStackBar from "../TechStackBar/TechStackBar";
import styles from "./ExperienceCard.module.css";
import { ThemeContext } from "../../App";

const ExperienceCard = (props) => {
  const { isDarkMode } = React.useContext(ThemeContext);
  const description = props.data.description.map((item) => <li>{item}</li>);
  const [displayDescription, setDisplayDescription] = React.useState(false);

  const onDescriptionButtonClick = () => {
    setDisplayDescription(!displayDescription);
  };

  return (
    <div
      className={styles.container}
      style={{
        color: isDarkMode ? "rgba(255, 255, 255, 0.8)" : "rgba(0, 0, 0, 1)",
      }}
    >
      <div className={styles.titleContainer}>
        <img
          className={styles.logoImg}
          src={require(`../../assets/images/experience/${props.data.logo}`)}
          alt={props.data.alt}
        />
        <span className={styles.organization}>{props.data.organization}</span>
      </div>
      <div className={styles.titleContainer}>
        <span className={styles.title}>{props.data.title}</span>
        <DeployBar data={props.data} />
      </div>
      <span className={styles.location}>{props.data.location}</span>
      <TechStackBar data={props.data.skills} />
      {displayDescription && (
        <div className={styles.description}>
          <ul>{description}</ul>
        </div>
      )}
      <div className={styles.footer}>
        <Button
          className={styles.descriptionButton}
          onClick={onDescriptionButtonClick}
        >
          View Description
        </Button>
      </div>
    </div>
  );
};

export default ExperienceCard;
