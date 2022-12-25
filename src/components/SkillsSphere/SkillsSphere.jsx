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
        initSpeed: "fast",
        keep: true,
      };
      TagCloud(container, skills, options);
    };
  }, []);

  return (
    <div className="text-sphere">
      <span className="tagcloud "></span>
    </div>
  );
};

export default SkillsSphere;
