import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Alekya</h1>
        <p className={styles.description}>
          I am a Full Stack Developer and ML enthusiast with 3+ years of
          experience in building user-focused web applications. Currently, I am
          a CS graduate student at San Francisco State University. Passionate
          about AI, particularly in NLP and Computer Vision, I am eager to make
          a meaningful impact through innovative solutions.
        </p>
        <p className={styles.description}>
          Please reach out to learn more about me!
        </p>
        <a
          href="mailto:alekya.bairaboina@gmail.com"
          className={styles.contactBtn}
        >
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.jpeg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
