import React from "react";
import { Container } from "react-bootstrap";
import { LiaLinkedinIn } from "react-icons/lia";
import { PiGithubLogoFill } from "react-icons/pi";
import { FaEnvelope, FaDownload } from "react-icons/fa";
import { FaPhoneFlip } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import styles from "./ContactMe.module.css";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { useState } from "react";
import { Button } from "react-bootstrap";

const ContactMe = () => {
  const [toolTipText, setTooTipText] = useState("Click to copy");

  const resetToolTip = () => {
    setTooTipText("Click to copy");
  };

  const copiedTooltip = () => {
    setTooTipText("Copied");
  };

  const copyText = (copy: string) => {
    copiedTooltip();
    navigator.clipboard.writeText(copy);
  };

  return (
    <Container id="contacts">
      <div className={styles.separator}></div>
      <div className={styles.mainContainer}>
        <h1>Contact me</h1>
        <OverlayTrigger
          placement="right"
          overlay={
            <Tooltip className={styles.toolTip} id={"email"}>
              {toolTipText}
            </Tooltip>
          }
        >
          <h3
            onMouseEnter={resetToolTip}
            onMouseLeave={resetToolTip}
            onClick={() => {
              copyText("luisfreitas1999@hotmail.com");
            }}
          >
            <FaEnvelope className={styles.contactIcon} />
            luisfreitas1999@hotmail.com
          </h3>
        </OverlayTrigger>

        <OverlayTrigger
          placement="right"
          overlay={
            <Tooltip className={styles.toolTip} id={"location"}>
              {toolTipText}
            </Tooltip>
          }
        >
          <h3
            onMouseEnter={resetToolTip}
            onMouseLeave={resetToolTip}
            onClick={() => {
              copyText("Coimbra, Portugal");
            }}
          >
            <FaHome className={styles.contactIcon} />
            Coimbra, Portugal
          </h3>
        </OverlayTrigger>

        <OverlayTrigger
          placement="right"
          overlay={
            <Tooltip className={styles.toolTip} id={"phone"}>
              {toolTipText}
            </Tooltip>
          }
        >
          <h3
            onMouseEnter={resetToolTip}
            onMouseLeave={resetToolTip}
            onClick={() => {
              copyText("+351936768310");
            }}
          >
            <FaPhoneFlip className={styles.contactIcon} />
            +351 936 768 310
          </h3>
        </OverlayTrigger>

        <a
          className={styles.downloadBtn}
          href="/luisFreitasCv.pdf"
          download={"luisFreitasCv.pdf"}
        >
          <FaDownload></FaDownload>
          Download Curriculum
        </a>

        <div className={styles.divSocial}>
          <a
            href="https://www.linkedin.com/in/luis-freitas-878930187/"
            target="_blank"
            rel="noreferrer"
          >
            <LiaLinkedinIn className={styles.socialIcon}></LiaLinkedinIn>
          </a>
          <a
            href="https://github.com/llluuuiiisss"
            target="_blank"
            rel="noreferrer"
          >
            <PiGithubLogoFill className={styles.socialIcon}></PiGithubLogoFill>
          </a>
        </div>
      </div>
    </Container>
  );
};

export default ContactMe;
