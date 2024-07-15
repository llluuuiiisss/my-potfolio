import React from "react";
import styles from "./Project.module.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

interface ProjectProps {
  title: string;
  imageLink: string;
  description: string;
  codeUrl: string;
}

const Project: React.FC<ProjectProps> = ({
  title,
  imageLink,
  codeUrl,
  description,
}) => {
  return (
    // <Card
    //   border="secondary"
    //   className={styles.card}
    //   style={{ borderWidth: "2px" }}
    // >
    //   <Card.Img variant="top" src={imageLink} />
    //   <Card.Body>
    //     <Card.Title>{title}</Card.Title>
    //     <Card.Text className={styles.cardParagraph}>{description}</Card.Text>
    //     <Button
    //       variant="secondary"
    //       href="https://www.abola.pt/"
    //       target="_blank"
    //     >
    //       Code
    //     </Button>
    //   </Card.Body>
    // </Card>

    <div className={styles.projectDiv}>
      <h3>{title}</h3>
      <img src={imageLink} className={styles} alt="" />
      <p className={styles.cardParagraph}>{description}</p>
      <Button variant="secondary" href="https://www.abola.pt/" target="_blank">
        Code
      </Button>
    </div>
  );
};

export default Project;
