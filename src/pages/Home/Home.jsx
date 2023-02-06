import React, { useEffect, useState } from "react";
import ImageHolder from "../../components/ImageHolder/ImageHolder";
import {
  ProfessionalHeadshot,
  FallbackProfessionalHeadshot,
  CaliforniaBackgroundImg1,
  CaliforniaBackgroundImg2,
  CaliforniaBackgroundImg3,
  NewYorkBackgroundImg1,
  NewYorkBackgroundImg2,
  NewYorkBackgroundImg3,
  DelhiBackgroundImg1,
  DelhiBackgroundImg2,
} from "../../assets/images";
import { FaLinkedinIn, FaGithub, FaFileDownload } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import styles from "./Home.module.css";
import { Button } from "react-bootstrap";

const Home = () => {
  const [location, setLocation] = useState("Delhi, India");
  const [backgroundImage, setBackgroundImage] = useState(DelhiBackgroundImg1);
  const backgroundImagesArray = [
    CaliforniaBackgroundImg1,
    CaliforniaBackgroundImg2,
    CaliforniaBackgroundImg3,
    NewYorkBackgroundImg1,
    NewYorkBackgroundImg2,
    NewYorkBackgroundImg3,
    DelhiBackgroundImg1,
    DelhiBackgroundImg2,
  ];

  const locationDict = {
    newyork: "New York, USA",
    california: "California, USA",
    delhi: "Delhi, India",
  };

  useEffect(() => {
    const selectedBackgroundImage =
      backgroundImagesArray[
        Math.floor(Math.random() * backgroundImagesArray.length)
      ];
    setBackgroundImage(selectedBackgroundImage);
    const locationName = selectedBackgroundImage.split("-")[1];
    setLocation(locationDict[locationName]);
  }, []);

  return (
    <div
      className={styles.container}
      style={{ background: `url(${backgroundImage})` }}
    >
      <div className={styles.content}>
        <ImageHolder
          primarySource={ProfessionalHeadshot}
          secondarySource={FallbackProfessionalHeadshot}
          alt="Professional Headshot of Sahil Gupta"
          imageClassName={styles.professionalHeadshot}
        />
        <div className={styles.title}>
          <span>Sahil Gupta</span>
        </div>
        <div className={styles.about}>
          <span>Software Engineer, Mobile Developer</span>
        </div>
        <div className={styles.socials}>
          <a
            href="https://www.linkedin.com/in/sahilgupta17"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn className={styles.socialsIcon} />
          </a>
          <a
            href="https://github.com/sahilgupta17"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className={styles.socialsIcon} />
          </a>
          <a
            href="mailto:gsahil2000.14@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <MdEmail className={styles.socialsIcon} size={40} />
          </a>
        </div>
        <a href="/Resume.pdf" target="_blank" rel="noreferrer">
          <Button className={styles.resumeButton}>
            <FaFileDownload className={styles.resumeIcon} /> Résumé
          </Button>
        </a>
      </div>

      <div className={styles.location}>{location}</div>
    </div>
  );
};
export default Home;
