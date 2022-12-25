import React, { useEffect } from "react";
import TagCloud from "TagCloud";
import "./SkillsSphere.module.css";

// TODO: Update the css file. Remove redundant styling code
// And resolve issue that tagcloud item color and hover is not working

const SkillsSphere = () => {
  useEffect(() => {
    return () => {
      const container = ".tagcloud";
      const skills = [
        "Java",
        "Python",
        "JavaScript",
        "TypeScript",
        "Kotlin",
        "SQL",
        "C++",
        "Selenium",
        "AWS",
        "AWS Lambda",
        "AWS S3",
        "AWS DynamoDB",
        "Android Development",
        "React Native",
        "Firebase",
        "NumPy",
        "Pandas",
        "Matplotlib",
        "scikit-learn",
        "Git",
      ];

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
