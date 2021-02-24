import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
import heroVideo from "../../assets/images/4k-video-hero.mp4"
import About from "../About/index.js"
import styled from "styled-components";

const SHeader = styled.header`
  display: flex;
  background-color: none;
`
const SNav = styled.nav`
  background-color: transparent;
`

const SHero = styled.section`
  // margin-top: -65px;
`

const SContainer = styled.header`
  display: flex;
  vertical-align: middle;
  justify-content: center;
  align-items: center;
  margin: 0 0 0 -50%;
`

const SVideo = styled.video`

  position: fixed;
  display: flex;
  vertical-align: middle;
  justify-content: center;
  align-items: center;
  z-index: -2;
  height: 100vh;
  // width: 100vw;
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
      <SContainer>
        <SVideo autoPlay muted loop>
          <source src={heroVideo} type="video/mp4"/>
        </SVideo>
      </SContainer>
      <SHero className="hero" alt="Scot Itakura in front of a waterfall">
      </SHero>
    </SHeader>
  );
}
export default Navigation;
