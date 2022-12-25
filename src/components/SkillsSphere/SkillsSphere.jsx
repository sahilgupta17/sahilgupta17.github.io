import React, { useEffect, useState } from "react";
import TagCloud from "TagCloud";
import SkillsData from "../../data/Skills.json";
import "./SkillsSphere.module.css";

// TODO: Update the css file. Remove redundant styling code
// And resolve issue that tagcloud item color and hover is not working

const SkillsSphere = () => {
  useEffect(() => {
    return () => {
      const container = ".tagcloud";
      const skills = SkillsData.map((elem) => elem.name);

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

export default SkillsSphere;
