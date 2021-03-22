import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
import styled from "styled-components";

const STitle = styled.div`
  width: 400px;
  font-size: 20px;
  font-weight: bold;
  margin: -30px 0 0 0;
  text-align: left;
`
const SSection = styled.section`
  margin: -70vh 0 0 10%;
  width: 50%;
  position: absolute;
  padding: 5px 30px 5px 30px;
  @media (max-width: 700px) {
    width: 70%;
  }
  @media (max-width: 530px) {
    margin: -60vh 0 0 20px;
    width: 100%;
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
    width: 80%
  }
  @media (max-height: 300px) {
    margin-top: -35vh;
    width: 80%
  }
`

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
        Front-end web developer with a background in scientific data analytics and scientific coding 
        programs as an Earth Science graduate from UC Santa Cruz. Recently certified 
        through UC Berkeley’s Full-Stack Web Development program, employing my 
        scientific program experience with MATLAB, Python, ArcGIS to become adept 
        at web programs such as JavaScript, Node.js, React.js, etc. Successfully 
        developed an interactive, responsive, and visually attractive web 
        page for a business’s primary customer hub as a freelance web developer. 
        Striving to create visually superb and enjoyably 
        interactive web pages that are unique, memorable, and dependable.
      </p>
      <div className="flex-row"></div>
    </SSection>
  );
}

export default About;
