import React, { useEffect } from "react";
import TagCloud from "TagCloud";
import SkillsData from "../../data/Skills.json";
import "./WordCloud.module.css";

// TODO: Update the css file. Remove redundant styling code
// And resolve issue that tagcloud item color and hover is not working
// No styles currently working

const WordCloud = () => {
  useEffect(() => {
    return () => {
      const container = ".tagcloud";
      const skills = SkillsData.map((category) => {
        const skillsList = category.skills.map((skill) => skill.name);
        return skillsList;
      }).reduce(
        (accumulator, currentValue) => accumulator.concat(currentValue),
        []
      );

      const options = {
        radius: 300,
        maxSpeed: "fast",
        initSpeed: "normal",
        keep: true,
      };

      TagCloud(container, skills, options);
    };
  }, []);

  return <span className="tagcloud"></span>;
};

export default WordCloud;
