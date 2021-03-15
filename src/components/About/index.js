import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
import styled from "styled-components";

const STitle = styled.div`
  // color: white;
  border-radius: 5px;
  width: 400px;
  border-radius: 5px;
  font-size: 20px;
  font-weight: bold;
  margin: -30px 0 0 -50px;
  // padding: 15px 25px 15px 25px;
  text-align: center;
  mix-blend-mode: screen;
  z-index: -3;
`

const SSection = styled.section`
  position: absolute;
  // background: rgba(245, 245, 247, 0.5);
  color: black;
  border-radius: 5px;
  // text-align: center;
  width: 50%;
  padding: 5px 30px 5px 30px;
  margin: -70vh 0 0 100px;
  @media (max-width: 530px) {
    margin: -60vh 0 0 20px;
    width: 70%;
  }
  @media (min-width: 530px) {
    margin: -75vh 0 0 100px;
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
