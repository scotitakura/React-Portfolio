import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
import styled from "styled-components";

const SSection = styled.section`
  // position: fixed;
  background: rgba(245, 245, 247, 0.5);
  color: black;
  // border-radius: 5px;
  // text-align: center;
  width: 50%;
  padding: 5px 30px 5px 30px;
  margin: -600px 0 100px 100px;
`

function About() {
  const currentCategory = {
    name: "about me",
    description: "About me page",
  };
  return (
    <SSection className="container">
      <h3>{capitalizeFirstLetter(currentCategory.name)}</h3>
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
