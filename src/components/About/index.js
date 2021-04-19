import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
import styled from "styled-components";

const STitle = styled.div`
  width: 100%;
  font-size: 20px;
  font-weight: bold;
  margin: -30px 0 0 0;
  text-align: left;
`;
const SSection = styled.section`
  margin: -70vh 0 0 8%;
  width: 50%;
  position: absolute;
  padding: 5px 30px 5px 30px;
  @media (max-aspect-ratio: 202/135) {
    width: 90vw;
  }
  @media (max-width: 700px) {
    width: 70%;
  }
  @media (max-width: 492px) {
    margin: -60vh 0 0 20px;
    width: 90%;
  }
  @media (max-height: 900px) {
    margin-top: -75vh;
  }
  @media (max-height: 800px) {
    margin-top: -70vh;
  }
  @media (max-height: 700px) {
    margin-top: -65vh;
  }
  @media (max-height: 600px) {
    margin-top: -60vh;
  }
  @media (max-height: 500px) {
    margin-top: -55vh;
  }
  @media (max-height: 450px) {
    margin-top: -50vh;
  }
  @media (max-height: 400px) {
    margin-top: -45vh;
  }
  @media (max-height: 350px) {
    margin-top: -40vh;
    width: 80%;
  }
  @media (max-height: 300px) {
    margin-top: -35vh;
    width: 80%;
  }
`;

function About() {
  const currentCategory = {
    name: "about me",
    description: "About me page",
  };
  return (
    <SSection className="container">
      <STitle>
        <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
      </STitle>
      <p className="font-med">
        Front-end web developer leveraging a background in geophysical data
        analytics and scientific coding programs to design and create unique,
        memorable, and dependable websites. From an Earth Science graduate from
        UC Santa Cruz, to a certificated Full-Stack Web Developer from UC
        Berkeley, my knowledge of analytical programs like MATLAB, Python, and
        ArcGIS has accelerated my mastery of web development programs like
        React.js, HTML, CSS, and JavaScript. As a freelance web developer, I
        successfully created an interactive, responsive, and visually-attractive
        web page to serve as the primary customer hub of a fledgling start-up. I
        am enthusiastic to enhance the quality of web applications by employing
        my web development experience, my analytical programming education, and
        my passion to design, create, and innovate.
      </p>
      <div className="flex-row"></div>
    </SSection>
  );
}

export default About;
