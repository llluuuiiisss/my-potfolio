import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./Header.module.css";

interface HeaderProps {
  darkNav: boolean;
}

const Header: React.FC<HeaderProps> = ({ darkNav }) => {
  function scrollToTargetAdjusted(
    targetElement: string,
    additionalOffset: number
  ) {
    var element = document.getElementById(targetElement)!;
    var headerOffset = 62 + additionalOffset;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        sticky="top"
        bg="primary"
        className={darkNav ? styles.darkNav : ""}
      >
        <Container>
          {darkNav && (
            <Navbar.Brand href="#top" className={styles.webName}>
              <h3>Luís Freitas</h3>
            </Navbar.Brand>
          )}

          <Navbar.Toggle
            className="ms-auto"
            aria-controls="responsive-navbar-nav"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                onClick={() => {
                  scrollToTargetAdjusted("tech-stack", 0);
                }}
                className={styles.navLink}
              >
                Tech Stack
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  scrollToTargetAdjusted("education", 60);
                }}
                className={styles.navLink}
              >
                Education
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  scrollToTargetAdjusted("portfolio", 60);
                }}
                className={styles.navLink}
              >
                Portfolio
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  scrollToTargetAdjusted("contacts", 60);
                }}
                className={styles.navLink}
              >
                Contact me
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
