import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
import About from "../About/index.js"
import styled from "styled-components";

const SHeader = styled.header`
  background-color: none;
`
const SNav = styled.nav`
  background-color: transparent;
`

const SHero = styled.section`
  margin-top: -65px;
`

function Navigation(props) {
  const { categories = [], setCurrentCategory, currentCategory } = props;

  return (
    <SHeader className="flex-row px-1">
      <SNav className="nav-wrapper">
        <a className="color-blue font-large title" href="#">Scot Itakura</a>
        <a href="#" data-target="mobile-demo" class="valign-wrapper sidenav-trigger"><i class="material-icons">menu</i></a>
        <ul id="nav-mobile" className="flex-row hide-on-med-and-down right">
          {categories.map((category) => (
            <li className={`mx-2 nav-items ${ currentCategory.name === category.name && "navActive" }`} key={category.name} >
              <span className="cursor-pointer" onClick={() => {setCurrentCategory(category);}} >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
        <ul class="sidenav background-green" id="mobile-demo">
          {categories.map((category) => (
            <li className={`mx-2 nav-items ${ currentCategory.name === category.name && "navActive" }`} key={category.name} >
              <span className="cursor-pointer" onClick={() => { setCurrentCategory(category); }} >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </SNav>
      <SHero className="hero" alt="Scot Itakura in front of a waterfall">
      </SHero>
    </SHeader>
  );
}

export default Navigation;
