import React from "react";
import styles from "./Portfolio.module.css";
import { Container, Row, Col } from "react-bootstrap";
import Project from "./Project";

const Portfolio = () => {
  return (
    <Container className={styles.portfolioDiv} id="portfolio">
      <h1 className="text-center">Portfolio</h1>
      <p className={styles.note}>
        *Note that this does not include professional made project due to
        privacy reasons.
        <br /> Only the ones I developed to practice.
      </p>
      <Row className={`mt-5 justify-content-md-center`}>
        <Col lg={3} className={styles.singleCard}>
          <Project
            title="This website"
            imageLink="/images/psThisWebsite.jpg"
            codeUrl="/"
            description="Developed using TypeScript, React, BootStrap and CSS."
          ></Project>
        </Col>
        <Col lg={3} className={styles.singleCard}>
          <Project
            title="My old portfolio"
            imageLink="/images/psOldPortfolio.jpg"
            codeUrl="https://github.com/llluuuiiisss/Portfolio"
            description="Developed using React, JavaScript, HTML, CSS and Bootstrap."
          ></Project>
        </Col>
        <Col lg={3} className={styles.singleCard}>
          <Project
            title="Secrets"
            imageLink="/images/psSecrets.png"
            codeUrl="https://github.com/llluuuiiisss/Secrets"
            description="Social network developed with Google API, MongoDB, mongoose, Node, Express, HTML, CSS."
          ></Project>
        </Col>
        <Col lg={3} className={styles.singleCard}>
          <Project
            title="Blog Website"
            imageLink="/images/psBlogWebsite.png"
            codeUrl="https://github.com/llluuuiiisss/blog"
            description="A blog developed using Mongoose, Node, Express, HTML, CSS e Bootstrap."
          ></Project>
        </Col>
        <Col lg={3} className={styles.singleCard}>
          <Project
            title="Amateur football"
            imageLink="/images/psAmateurFootball.png"
            codeUrl="https://github.com/llluuuiiisss/Futebol-Amador"
            description="Website to organize amateur football games and/or tournaments, developed with SQL, HTML, CSS, PHP and JavaScript."
          ></Project>
        </Col>
        <Col lg={3} className={styles.singleCard}>
          <Project
            title="Newsletter"
            imageLink="/images/psNewsLetter.png"
            codeUrl="https://github.com/llluuuiiisss/Newsletter"
            description="Personal Newsletter, developed with Mailchimp, Node, Express, HTML, CSS and Bootstrap."
          ></Project>
        </Col>
        <Col lg={3} className={styles.singleCard}>
          <Project
            title="Kepper"
            imageLink="/images/psKepper.png"
            codeUrl="https://github.com/llluuuiiisss/Kepper"
            description="Google Keep clone. Developed using React, HTML, CSS and Bootstrap."
          ></Project>
        </Col>
        <Col lg={3} className={styles.singleCard}>
          <Project
            title="TinDog"
            imageLink="/images/psTinDog.png"
            codeUrl="https://github.com/llluuuiiisss/Tindog/"
            description="Website to advertise a mobile app, built with only HTML, CSS, JavaScript and Bootstrap."
          ></Project>
        </Col>
        <Col lg={3} className={styles.singleCard}>
          <Project
            title="To Do List"
            imageLink="/images/psToDoList.png"
            codeUrl="https://github.com/llluuuiiisss/todo-list"
            description="To Do list connected to a MongoDB. Built with Mongoose, Node, Express, HTML, CSS e Bootstrap."
          ></Project>
        </Col>
        <Col lg={3} className={styles.singleCard}>
          <Project
            title="B1t Catcher"
            imageLink="/images/psBitCatcher.png"
            codeUrl="https://github.com/llluuuiiisss/B1tCatcher"
            description="Web Game where the main character had to catch/avoid 1's or 0's in order to translate a random decimal number to it's binary equal. Built with HTML, CSS e JavaScript."
          ></Project>
        </Col>
        <Col lg={3} className={styles.singleCard}>
          <Project
            title="Rest API"
            imageLink="/images/psRestApi.png"
            codeUrl="https://github.com/llluuuiiisss/wikiAPI"
            description="RESTful API. Developed with Node, Express, MongoDB e Mongoose and Robo 3T."
          ></Project>
        </Col>
        <Col lg={3} className={styles.singleCard}>
          <Project
            title="GraphQL API"
            imageLink="/images/psGraphQl.png"
            codeUrl="https://github.com/llluuuiiisss/graphqlAPI"
            description="GraphQL API. Developed with Node, Express, MongoDB e Mongoose."
          ></Project>
        </Col>
      </Row>
    </Container>
  );
};

export default Portfolio;
