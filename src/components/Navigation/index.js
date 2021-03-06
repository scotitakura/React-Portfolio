import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
import heroVideo from "../../assets/images/4k-video-hero.mp4"
import heroPoster from "../../assets/images/hero-poster.jpg"
import Footer from "../Footer/index.js";
import styled from "styled-components";

const SA = styled.div`
  background-color: white;
  color: black;
  border-radius: 5px;
  font-size: 65px; 
  font-weight: bold;
  margin: 40px;
  padding: 15px 25px 15px 25px;
  text-align: center;
  position: absolute;
  mix-blend-mode: screen;
  z-index: -1;
  @media (max-width: 339px) {
    margin: 40px 10%;
    font-size: 18vw;
  }
`
const SLi = styled.li`
  background-color: white;
  border-radius: 5px;
  font-size: 20px; 
  font-weight: bold;
  margin: 40px 40px 40px 0;
  padding: 15px 25px 15px 25px;
  text-align: center;
  mix-blend-mode: screen;
  z-index: -3;
`
const SMLi = styled.li`
  background-color: white;
  font-size: 20px; 
  font-weight: bold;
  margin: 40px;
  padding: 15px 25px 15px 25px;
  text-align: center;
  z-index: 2;
`
const SAIcon = styled.a`
  padding: 15px 10px 15px 10px !important;
  height: auto !important;
  @media (max-width: 339px) {
    margin: 41px 10% 40px 70% !important;
  }
`
const SNav = styled.nav`
  background-color: transparent;
  box-shadow: none !important;
`
const SNavColor = styled.span`
  color: black;
`
const SHeader = styled.header`
  background-color: transparent;
  display: flex;
  background-color: none;
`
const SHero = styled.section`
  background-color: transparent;
`
const SContainer = styled.header`
  display: flex;
  vertical-align: middle;
  justify-content: center;
  align-items: center;
  margin: -1% 0 0 -50%;
`
const SVideo = styled.video`
  position: fixed;
  left: 0;
  z-index: -3;
  width: 105vw;
  @media (min-aspect-ratio: 202/135) {
    width: 115vw;
    height: auto;
  }
  @media (max-aspect-ratio: 202/135) {
    top: -50px !important;
    width: auto;
    height: 110vh;
    min-width: 101vw;
  }
  @media (max-aspect-ratio: 1075/851) {
    top: -180px;
    left -260px;
  }
  @media (min-aspect-ratio: 1075/851) {
    left -50px;
  }
  @media (max-aspect-ratio: 513/490) {
    height: 150vh;
    top: -150px !important;
    left -130px !important;
  }
  @media (max-aspect-ratio: 513/600) {
    height: 115vh;
    top: -40px !important;
    left -130px !important;
  }
  @media (max-aspect-ratio: 350/600) {
    height: 115vh;
    top: -40px !important;
    left -250px !important;
  }
`

function Navigation(props) {
  const { categories = [], setCurrentCategory, currentCategory } = props;

  return (
    <SHeader className="flex-row px-1">
      <SNav className="nav-wrapper">
        <SA className="" href="#">Scot Itakura</SA>
        <SAIcon href="#" data-target="mobile-demo" className="valign-wrapper sidenav-trigger nav-icon"><i class="material-icons nav-icon-button">menu</i></SAIcon>
        <ul id="nav-mobile" className="flex-row hide-on-med-and-down right">
          {categories.map((category) => (
            <SLi className={`mx-2 nav-items ${ currentCategory.name === category.name && "navActive" }`} key={category.name} >
              <SNavColor className="cursor-pointer" onClick={() => {setCurrentCategory(category);}} >
                {capitalizeFirstLetter(category.name)}
              </SNavColor>
              <Footer></Footer>
            </SLi>
          ))}
        </ul>
        <ul class="sidenav" id="mobile-demo">
          {categories.map((category) => (
            <SMLi className={`mx-2 nav-items ${ currentCategory.name === category.name && "navActive" }`} key={category.name} >
              <SNavColor className="sidenav-close cursor-pointer" onClick={() => { setCurrentCategory(category); }} >
                {capitalizeFirstLetter(category.name)}
              </SNavColor>
            </SMLi>
          ))}
        </ul>
      </SNav>
      <SContainer>
        <SVideo poster={heroPoster} muted autoPlay loop>
          <source src={heroVideo} type="video/mp4"/>
        </SVideo>
      </SContainer>
      <SHero className="hero" alt="Scot Itakura in front of a waterfall">
      </SHero>
    </SHeader>
  );
}
export default Navigation;
