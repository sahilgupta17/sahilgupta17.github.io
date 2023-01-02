import React from "react";
import { Button } from "react-bootstrap";
import "react-vertical-timeline-component/style.min.css";
import styles from "./ExperienceCard.module.css";

const ExperienceCard = (props) => {
  const description = props.data.description.map((item) => <li>{item}</li>);
  const [displayDescription, setDisplayDescription] = React.useState(false);
  const skills = props.data.skills
    .reduce((acc, item) => acc.concat(item + " • "), "")
    .slice(0, -3);

  const onDescriptionButtonClick = () => {
    setDisplayDescription(!displayDescription);
  };

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <img
          className={styles.logoImg}
          src={require(`../../assets/images/experience/${props.data.logo}`)}
          alt={props.data.alt}
        />
        <span className={styles.organization}>{props.data.organization}</span>
      </div>
      <span className={styles.title}>{props.data.title}</span>
      <span className={styles.location}>{props.data.location}</span>
      <span className={styles.skills}>Skills: {skills}</span>
      {displayDescription && (
        <div className={styles.description}>
          <ul>{description}</ul>
        </div>
      )}
      <div className={styles.footer}>
        <Button
          className={styles.websiteButton}
          href={props.data.websiteURL}
          target="_blank"
        >
          Visit Website
        </Button>
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
