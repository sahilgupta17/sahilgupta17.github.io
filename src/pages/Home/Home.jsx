import React, { useEffect } from "react";
import ImageHolder from "../../components/ImageHolder/ImageHolder";
import {
  ProfessionalHeadshot,
  FallbackProfessionalHeadshot,
  CaliforniaBackgroundImg1,
  CaliforniaBackgroundImg2,
  CaliforniaBackgroundImg3,
  NewYorkBackgroundImg1,
  DelhiBackgroundImg1,
  DelhiBackgroundImg2,
} from "../../assets/images";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import styles from "./Home.module.css";

const Home = () => {
  const backgroundImagesArray = [
    CaliforniaBackgroundImg1,
    CaliforniaBackgroundImg2,
    CaliforniaBackgroundImg3,
    NewYorkBackgroundImg1,
    DelhiBackgroundImg1,
    DelhiBackgroundImg2,
  ];
  const backgroundImage =
    backgroundImagesArray[
      Math.floor(Math.random() * backgroundImagesArray.length)
    ];

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
          className={styles.professionalHeadshot}
        />
        <div className={styles.title}>
          <span>Sahil Gupta</span>
        </div>
        <div className={styles.about}>
          <span>Software Engineer, Mobile Developer</span>
        </div>
        <div className={styles.socials}>
          <a href="https://www.linkedin.com/in/sahilgupta17" target="_blank">
            <FaLinkedinIn className={styles.socialsIcon} />
          </a>
          <a href="https://github.com/sahilgupta17" target="_blank">
            <FaGithub className={styles.socialsIcon} />
          </a>
          <a href="mailto:gsahil2000.14@gmail.com" target="_blank">
            <MdEmail className={styles.socialsIcon} size={40} />
          </a>
        </div>
      </div>

      <div className={styles.location}>Delhi, India</div>
    </div>
  );
};
export default Home;
