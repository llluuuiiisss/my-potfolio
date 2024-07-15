import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./TechStack.module.css";

const TechStack = () => {
  return (
    <div className={`${styles.container}`} id="tech-stack">
      <Container>
        <h1 className="text-center">Tech Stack</h1>
        <Row className={`mt-5 justify-content-md-center ${styles.row}`}>
          <Col lg={2} md={4} className={styles.column}>
            <h2>General</h2>
            <ul className={styles.noBullets}>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>Jest</li>
              <li>Selenium</li>
              <li>Python</li>
              <li>Java</li>
              <li>C</li>
            </ul>
          </Col>
          <Col lg={2} md={4} className={styles.column}>
            <h2>Front-end</h2>
            <ul className={styles.noBullets}>
              <li>React</li>
              <li>Next</li>
              <li>Bootstrap</li>
              <li>Material UI</li>
              <li>Tailwind CSS</li>
              <li>HTML 5</li>
              <li>CSS 3</li>
              <li>Wordpress</li>
              <li>JQuery</li>
            </ul>
          </Col>
          <Col lg={2} md={4} className={styles.column}>
            <h2>Back-end</h2>
            <ul className={styles.noBullets}>
              <li>Node</li>
              <li>Express</li>
              <li>Serverless.yml</li>
              <li>MySQL</li>
              <li>PostgreSQL</li>
              <li>MongoDB</li>
              <li>Mongoose</li>
            </ul>
          </Col>
          <Col lg={2} md={4} className={styles.column}>
            <h2>Cloud</h2>
            <ul className={styles.noBullets}>
              <li>AWS</li>
              <li>Terraform</li>
              <li>Git</li>
              <li>GitHub</li>
              <li>Bitbucket</li>
              <li>Zephyr Scale</li>
              <li>Jira</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TechStack;
