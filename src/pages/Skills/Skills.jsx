import React from "react";
import SkillsSphere from "../../components/SkillsSphere/SkillsSphere";
import styles from "./Skills.module.css";

const Skills = () => {
  return (
    <div className={styles.container}>
      <div className={styles.skillsImageContainer}></div>
      <SkillsSphere className={styles.skillsSphere} />
    </div>
  );
};
export default Skills;
