import React from "react";
import { Container } from "react-bootstrap";
import styles from "./Banner.module.css";

const Banner = () => {
  const handleScroll = (e: React.UIEvent<HTMLElement>): void => {
    e.stopPropagation(); // Handy if you want to prevent event bubbling to scrollable parent
    console.log({
      event: e,
      target: e.target, // Note 1* scrollTop is undefined on e.target
      currentTarget: e.currentTarget,
      scrollTop: e.currentTarget.scrollTop,
    });

    // const { scrollTop } = e.currentTarget;
  };
  return (
    <div className={styles.bannerContainer} onScroll={handleScroll} id="banner">
      <Container>
        <span className={styles.presentation}>Hello, my name is</span>
        <h1 className={styles.name}>Luís Freitas.</h1>
        <h2 className={styles.role}>Full-stack Developer & DevOps.</h2>
        <p className={styles.paragraph}>
          With more than 3 years of experience, I focused my tech stack on
          JavaScript tools and frameworks, and on AWS services. <br></br>I stand
          out for problem solving skills, creativity, adaptability and teamwork.
        </p>
      </Container>
      <div></div>
    </div>
  );
};

export default Banner;
