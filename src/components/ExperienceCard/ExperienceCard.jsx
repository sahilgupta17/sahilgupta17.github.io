import React from "react";
import styles from "./ExperienceCard.module.css";

const ExperienceCard = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <img
          className={styles.logoImg}
          src={require(`../../assets/images/experience/${props.data.logo}`)}
          alt={props.data.alt}
        />
        <span className={styles.position}>{props.data.title}</span>
      </div>
    </div>
  );
};

export default ExperienceCard;
