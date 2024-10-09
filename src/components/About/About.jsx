import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/about.jpeg")}
          alt="Me standing and watching a view"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3 style={{ marginBottom: "15px" }}>Full Stack Developer</h3>
              <p>
                As a Full Stack Developer, I have built responsive,
                user-friendly web applications that improve performance, enhance
                user engagement, and streamline processes. I specialize in
                front-end technologies like React.js, Next.js, and Material-UI,
                and back-end frameworks such as Spring Boot, Node.js,
                Express.js, and Django, with expertise in databases including
                MySQL, Cassandra, PostgreSQL, and MongoDB.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3 style={{ marginBottom: "15px" }}>
                Aspiring Machine Learning Engineer
              </h3>
              <p>
                During my Master’s, I gained hands-on experience in machine
                learning and data science, focusing on NLP and Computer Vision.
                I built AI models with TensorFlow, Keras, and Scikit-Learn for
                tasks like video description generation and drug resistance
                prediction, improving user engagement and accuracy.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3 style={{ marginBottom: "15px" }}>UI/UX Designer</h3>
              <p>
                As a UI/UX designer, I specialize in creating intuitive,
                visually appealing designs with Figma. My experience includes
                prototyping, usability testing, and improving user experiences
                through iterative design.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
