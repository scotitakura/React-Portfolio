import React, { useState } from "react";
import { capitalizeFirstLetter } from '../../utils/helpers';
import Navigation from "../Navigation";
import About from "../About";
import Portfolio from "../Portfolio";
import Contact from "../Contact";
import Resume from "../Resume";
import styled from "styled-components";

const TextBox = styled.p`
  display: flex;
  background-size: 70vh;
  height: 100%;
  width: 100%;
`

function Body() {
  const [categories] = useState([
    // { name: "about", description: "About me page" },
    // { name: "portfolio", description: "Portfolio page" },
    // { name: "resume", description: "Resume page" },
    { name: "contact", description: "Contact me" },
  ]);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);


  return (
    <div>
      <Navigation
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Navigation>
      <main>
        {/* {currentCategory.name === "about" && <About />}
        {currentCategory.name === "portfolio" && <Portfolio />}
        {currentCategory.name === "resume" && <Resume />} */}
        {currentCategory.name === "contact" && <Contact />}
      </main>
    </div>
  );
}

export default Body;