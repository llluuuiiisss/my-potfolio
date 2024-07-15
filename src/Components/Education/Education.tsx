import React from "react";
import styles from "./Education.module.css";
import { Container } from "react-bootstrap";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { PiBriefcaseBold, PiStudentBold } from "react-icons/pi";
import TimelineElement from "./TimelineElement";

const Education = () => {
  return (
    <Container id="education">
      <h1 className="text-center">
        Professional Experience<br></br> & Education
      </h1>
      <VerticalTimeline className={styles.timeLine}>
        <TimelineElement
          work={false}
          date="09/2017 - 08/2020"
          title="Bachelor's degrees in Software Engineering"
          institution="University of Coimbra"
          description="During this time I was studying and taking my first steps in the IT world, where I had the opportunity a lot of theory on subjects such as physics, math, algorithm, but also to have practical training in many areas from Arduino assembly to the modern programming languages."
        ></TimelineElement>
        <TimelineElement
          work={true}
          date="06/2019 - 09/2019"
          title="Web Developer"
          institution="ArcosAtlier"
          description="This was a summer job, while I was still in college. I worked for an architecture company where, first my role was to organize everything and automate all repetitive processes that an architecture process needed. I also built a website with only HTML, CSS, and JS with the Google Maps API. When a client first came to the company, he would draw his property on the map and the site would calculate the total area that the client could build in that area."
        ></TimelineElement>
        <TimelineElement
          work={false}
          date="09/2020 - 10/2020"
          title="The Complete Web Development Bootcamp"
          institution="Dr. Angela Yu, Udemy"
          description="Decided to take this online course to specialize my skill on the Web Development both Front-end and Back-end. This course gave me the basics on technologies such as HTML, CSS, JavaScript, Node, Express, React, Bootstrap, SQL and MongoDB."
        ></TimelineElement>
        <TimelineElement
          work={false}
          date="10/2020 - 11/2020"
          title="Understanding TypeScript"
          institution="Maximilian Schwarzmüller, Udemy"
          description="I took this course to learn the hot topic from the time that was TypeScript, in order to star using it instead of regular JavaScript in my React and Node projects."
        ></TimelineElement>
        <TimelineElement
          work={true}
          date="12/2020 - 01/2022"
          title="Full Stack developer"
          institution="AudiçãoActiva"
          description="In this job, I had the opportunity to set up multiple apache2 web servers and maintain them, to build 1 React and 2 WordPress websites, one of which was an ecommerce website, and also to manage a huge SQL database and build all the APIs and webhooks needed using Node and TypeScript."
        ></TimelineElement>
        <TimelineElement
          work={false}
          date="02/2020 - 03/2020"
          title="Become a WordPress Developer: Unlocking Power With Code"
          institution="Brad Schiff, Udemy"
          description="I took this course not just to fully understand how WordPress works, but also to enable me to do anything with it even though is a low code system."
        ></TimelineElement>
        <TimelineElement
          work={false}
          date="06/2020 - 08/2020"
          title="Unit Testing for Typescript & NodeJs Developers with Jest"
          institution="Alex Dan, Udemy"
          description="The goal of me taking this course was to take my first steps into unit testing, in specific with Jest (the most popular JavaScript testing framework)."
        ></TimelineElement>
        <TimelineElement
          work={false}
          date="09/2020 - 09/2020"
          title="SEO Training Masterclass: Beginner To Advanced SEO"
          institution="Alex Genadinik, Udemy"
          description="Since in the company I was in that time had started a SEO project to start going up in the Google search results I was asked to take this course what enable me to understand and helped to star building more and more SEO friendly web pages."
        ></TimelineElement>
        <TimelineElement
          work={true}
          date="02/2022 - 03/2024"
          title="Full Stack developer"
          institution="Thalox AG"
          description="Since this job was a startup starting from the zero, I was a mix of UI/UX designer, Full Stack developer, and DevOps. Firstly, when I joined the company, I got the task to research and design the whole UI, using tools such as Figma and Gimp. Besides the designer role, I took control of everything that was Front-end related, building a product website React, a marketing website using Next and email templates using MJML. At the same time I was working on the backend, where we were using Node in conjunction with a lot of AWS services in order to speed up development."
        ></TimelineElement>
        <TimelineElement
          work={false}
          date="04/2022 - 04/2022"
          title="Next.js 14 & React - The Complete Guide"
          institution="Maximilian Schwarzmüller, Udemy"
          description="I took this course to translate my knowledge of React to Next, in order to build a SEO friendly and fast marketing website for my company at the time."
        ></TimelineElement>
        <TimelineElement
          work={false}
          date="01/2023 - 02/2023"
          title="Selenium Webdriver with PYTHON from Scratch + Frameworks"
          institution="Rahul Shetty, Udemy"
          description="My company at that time asked me to take this course, so I could start automating End-to-End testing, and increase the robustness of our product."
        ></TimelineElement>
        <TimelineElement
          work={false}
          date="12/2023 - 01/2024"
          title="Terraform on AWS with SRE & IaC DevOps "
          institution="Kalyan Reddy Daida, Udemy"
          description="Took this course so we could start implementing IaC with Terraform on AWS due to reliability and backup reasons."
        ></TimelineElement>
      </VerticalTimeline>
      <br />
    </Container>
  );
};

export default Education;
