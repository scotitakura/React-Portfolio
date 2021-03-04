import React from "react";
import garage from "../../assets/images/garage-collage.jpg";
import qualitrees from "../../assets/images/QualitreesPreview.PNG";
import cosmo from "../../assets/images/CosmopolitianTastes-img.PNG";
import craver from "../../assets/images/The-Craver.PNG";
import { capitalizeFirstLetter } from "../../utils/helpers";

import styled from "styled-components";
import px2vw from "../../utils/px2vw";

const SSection = styled.section`
  margin-top: -80vh;
`
const STitle = styled.div`
  // color: white;
  border-radius: 5px;
  width: 400px;
  border-radius: 5px;
  font-size: 20px;
  font-weight: bold;
  margin: 20px 20px 0 55px;
  padding: 15px 25px 15px 25px;
  text-align: center;
  mix-blend-mode: screen;
  z-index: -3;
`
const SCard = styled.div`
  // background: rgba(245, 245, 247, 0.5);
  color: black;
  // border-style: solid;
  border-radius: 5px;
  width: 40% !important;
  font-size: 20px; 
  font-weight: bold;
  margin: 40px 40px 0 0;
  padding: 15px 25px 15px 25px;
  text-align: center;
  mix-blend-mode: screen;
  z-index: -1;
  
  @media (max-width: 768px) {
    width: 70% !important;
  }
  @media (min-width: 1024px) {
    width: 35% !important;
  }
`
const SType = styled.p`
  width: 35%;
  margin: 0 15% 0 0;

  @media (max-width: 768px) {
    width: 100%;
    margin: -10px 0 0 0
  }
  @media (min-width: 1024px) {
    width: 35%;
    margin: -10px 0 0 15%
  }
`
const SGithub = styled.div`
  width: 35%;
  margin: 0 15% 0 0;

  @media (max-width: 768px) {
    width: 100%;
    margin: 10px 0 0 0;
  }
  @media (min-width: 1024px) {
    width: 35%;
    margin: 0 15% 0 0;
  }
`
const SRow = styled.p`
  width: 35%;
  margin: 0 15% 0 0;

  @media (min-width: 768px) {
    width: 100%;
    margin: -10px 0 0 0
  }
  @media (min-width: 1024px) {
    width: 35%;
    margin: -10px 0 0 15%
  }
`

function Portfolio() {
  const currentCategory = {
    name: "portfolio",
    description: "Portfolio page",
  };
  return (
    <SSection className="">
      <STitle>
        <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
        <p>A collection of my past and current projects.</p>  
      </STitle>
      <div className="row">
          <SCard className="col">
            <h3>Garage Collage</h3> 
            <div className="row">
              <SType className="col">Bootcamp Project</SType>
              <SGithub className="col">
                <a
                  className="btn-floating social github background-blue"
                  href="https://github.com/jennifermulder/garage-endeavor"
                  >
                  <i className="fa fa-github background-blue"></i>
                </a>
              </SGithub>
            </div>
            <img className="image-size" src={garage} alt="Qualitrees Web Page" />
          </SCard>

          <SCard className="col s12 m6">
            <h3>Qualitrees</h3> 
            <div className="row">
              <SType className="col">Freelance Project</SType>
              <SGithub className="col">
                <a
                  className="btn-floating social github background-blue"
                  href="https://github.com/scotitakura/QualiTreesWeb"
                  >
                  <i className="fa fa-github background-blue"></i>
                </a>
              </SGithub>
            </div>
            <img className="image-size" src={qualitrees} alt="Qualitrees Web Page" />
          </SCard>

          <SCard className="col s12 m6">
            <h3>Cosmopolitan Tastes</h3> 
            <div className="row">
              <SType className="col">Bootcamp Project</SType>
              <SGithub className="col">
                <a
                  className="btn-floating social github background-blue"
                  href="https://github.com/scotitakura/fun-challenge-project"
                  >
                  <i className="fa fa-github background-blue"></i>
                </a>
              </SGithub>
            </div>
            <img className="image-size" src={craver} alt="Qualitrees Web Page" />
          </SCard>

          <SCard className="col s12 m6">
            <h3>The Craver</h3> 
            <div className="row">
              <SType className="col">Bootcamp Project</SType>
              <SGithub className="col">
                <a
                  className="btn-floating social github background-blue"
                  href="https://github.com/TheresaRutledge/CosmopolitanTastes"
                  >
                  <i className="fa fa-github background-blue"></i>
                </a>
              </SGithub>
            </div>
            <img className="image-size" src={cosmo} alt="Qualitrees Web Page" />
          </SCard>
        </div>
    </SSection>
  );
}

export default Portfolio;
