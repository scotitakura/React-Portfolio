import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
import heroVideo from "../../assets/images/4k-video-hero.mp4"
import heroImage from "../../assets/images/DSC02878.JPG"
import About from "../About/index.js"
import styled from "styled-components";

const SHeader = styled.header`
  background-color: transparent;
  display: flex;
  background-color: none;
`

const SNav = styled.nav`
  background-color: transparent;
  box-shadow: none !important;
`

const SVideoContainer = styled.video`
  background-size: cover;
  position: relative;
  height: 300px;
`

const SA = styled.div`
  position: fixed;
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
`

const SLi = styled.li`
  background-color: white;
  color: black;
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
  color: black;
  font-size: 20px; 
  font-weight: bold;
  margin: 40px;
  padding: 15px 25px 15px 25px;
  text-align: center;
  z-index: 2;
`



const SHero = styled.section`
background-color: transparent;
  // margin-top: -65px;
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
  display: flex;
  vertical-align: middle;
  justify-content: center;
  align-items: center;
  z-index: -2;
  height: 140vh;
  width: 150vw;
`

function Navigation(props) {
  const { categories = [], setCurrentCategory, currentCategory } = props;

  return (
    <SHeader className="flex-row px-1">
      <SNav className="nav-wrapper">
        <SA className="" href="#">Scot Itakura</SA>
        <a href="#" data-target="mobile-demo" class="valign-wrapper sidenav-trigger nav-icon"><i class="material-icons">menu</i></a>
        <ul id="nav-mobile" className="flex-row hide-on-med-and-down right">
          {categories.map((category) => (
            <SLi className={`mx-2 nav-items ${ currentCategory.name === category.name && "navActive" }`} key={category.name} >
              <span className="cursor-pointer" onClick={() => {setCurrentCategory(category);}} >
                {capitalizeFirstLetter(category.name)}
              </span>
            </SLi>
          ))}
        </ul>
        <ul class="sidenav" id="mobile-demo">
          {categories.map((category) => (
            <SMLi className={`mx-2 nav-items ${ currentCategory.name === category.name && "navActive" }`} key={category.name} >
              <span className="cursor-pointer" onClick={() => { setCurrentCategory(category); }} >
                {capitalizeFirstLetter(category.name)}
              </span>
            </SMLi>
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
