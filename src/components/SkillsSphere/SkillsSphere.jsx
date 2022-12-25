import React, { useEffect } from "react";
import TagCloud from "TagCloud";
import "./SkillsSphere.module.css";

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

  return (
    <div className="skills-sphere">
      <span className="tagcloud "></span>
    </div>
  );
};

export default SkillsSphere;
