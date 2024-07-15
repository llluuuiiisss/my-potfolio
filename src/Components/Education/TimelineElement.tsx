import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { PiStudentBold, PiBriefcaseBold } from "react-icons/pi";
import styles from "./TimelineElement.module.css";

interface TimeLineProps {
  work: boolean;
  title: string;
  date: string;
  institution: string;
  description: string;
}

const TimelineElement: React.FC<TimeLineProps> = ({
  work,
  title,
  date,
  institution,
  description,
}) => {
  const workColor = "rgb(255, 128, 0)";
  const educationColor = "rgb(30, 196, 202)";

  const contentStyleEducation = {
    background: educationColor,
    color: "#fff",
  };
  const contentStyleWork = { background: workColor, color: "#fff" };

  const contentArrowStyleEducation = {
    borderRight: "7px solid  #fff",
  };
  const contentArrowStyleWork = {
    borderRight: "7px solid  #fff",
  };

  const iconStyleEducation = { background: educationColor, color: "#fff" };
  const iconStyleWork = { background: workColor, color: "#fff" };

  return (
    <VerticalTimelineElement
      className={`vertical-timeline-element--education ${
        work ? styles.boxWork : styles.boxEducation
      }`}
      contentStyle={{ background: "#fff", color: "#000" }}
      contentArrowStyle={
        work ? contentArrowStyleWork : contentArrowStyleEducation
      }
      date={date}
      dateClassName={styles.dateText}
      iconStyle={work ? iconStyleWork : iconStyleEducation}
      icon={work ? <PiBriefcaseBold /> : <PiStudentBold />}
    >
      <h3 className="vertical-timeline-element-title">{title}</h3>
      <h4 className="vertical-timeline-element-subtitle">{institution}</h4>
      <p>{description}</p>
    </VerticalTimelineElement>
  );
};

export default TimelineElement;
