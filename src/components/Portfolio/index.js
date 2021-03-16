import React from "react";
import garagePreview from "../../assets/images/Garage-Collage-Preview.mp4";
import garagePoster from "../../assets/images/Garage-Poster.jpg";
import qualitreesPreview from "../../assets/images/QualiTrees-Preview.mp4";
import qualitreesPoster from "../../assets/images/QualiTrees-Poster.jpg";
import cosmoPreview from "../../assets/images/Cosmopolitian-Tastes-Preview.mp4";
import cosmoPoster from "../../assets/images/Cosmopolitian-Tastes-Poster.jpg";
import cravePreview from "../../assets/images/The-Craver-Preview.mp4";
import cravePoster from "../../assets/images/The-Craver-Poster.jpg";
import { capitalizeFirstLetter } from "../../utils/helpers";

import styled from "styled-components";

const SSection = styled.section`
  margin-top: -80vh;
  @media (max-height: 500px) {
    margin-top: -70vh;
  }
  @media (max-height: 450px) {
    margin-top: -65vh;
  }
  @media (max-height: 400px) {
    margin-top: -60vh;
  }
  @media (max-height: 350px) {
    margin-top: -55vh;
  }
  @media (max-height: 300px) {
    margin-top: -50vh;
  }
`;
const STitle = styled.div`
  width: 400px;
  font-size: 20px;
  font-weight: bold;
  margin: 27px 0 0 5%;
  padding: 15px 25px 15px 25px;
  text-align: center;
  z-index: -3;
`;
const SP = styled.p`
  font-size: 22px;
  font-weight: normal;
`
const SCard = styled.div`
  color: black;
  border-radius: 5px;
  width: 44% !important;
  font-size: 20px;
  font-weight: bold;
  margin: 40px 40px 0 0;
  padding: 15px 25px 15px 25px;
  text-align: center;
  z-index: -1;

  @media (max-width: 768px) {
    width: 76% !important;
  }
  @media (min-width: 1024px) {
    width: 35% !important;
  }
`;
const SType = styled.p`
  width: 25%;
  margin: 0 15% 0 15%;

  @media (max-width: 768px) {
    width: 100%;
    margin: -10px 0 0 0;
  }
  @media (min-width: 1024px) {
    width: 35%;
    margin: -10px 0 0 15%;
  }
`;
const SGithub = styled.div`
  width: 25%;
  margin: 0 15% 0 0;

  @media (max-width: 768px) {
    width: 100%;
    margin: 10px 0 0 0;
  }
  @media (min-width: 1024px) {
    width: 35%;
    margin: 0 15% 0 0;
  }
`;

const SVideo = styled.video`
  width: 90%;
  height: auto;
  opacity: 1;
  cursor: pointer;
`;

function Portfolio() {
  const currentCategory = {
    name: "portfolio",
    description: "Portfolio page",
  };
  return (
    <SSection className="">
      <STitle>
        <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
        <SP>A collection of my past and current projects.</SP>
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
                target="_blank"
              >
                <i className="fa fa-github background-blue"></i>
              </a>
            </SGithub>
          </div>
          <a href="https://garage-collage-2468.herokuapp.com/" target="_blank">
            <SVideo poster={garagePoster} autoPlay muted loop>
              <source src={garagePreview} type="video/mp4" />
            </SVideo>
          </a>
        </SCard>

        <SCard className="col s12 m6">
          <h3>Qualitrees</h3>
          <div className="row">
            <SType className="col">Freelance Project</SType>
            <SGithub className="col">
              <a
                className="btn-floating social github background-blue"
                href="https://github.com/scotitakura/QualiTreesWeb"
                target="_blank"
              >
                <i className="fa fa-github background-blue"></i>
              </a>
            </SGithub>
          </div>
          <a href="https://qualitrees-503dd.web.app/" target="_blank">
            <SVideo poster={qualitreesPoster} autoPlay muted loop>
              <source src={qualitreesPreview} type="video/mp4" />
            </SVideo>
          </a>
        </SCard>

        <SCard className="col s12 m6">
          <h3>Cosmopolitan Tastes</h3>
          <div className="row">
            <SType className="col">Bootcamp Project</SType>
            <SGithub className="col">
              <a
                className="btn-floating social github background-blue"
                href="https://github.com/TheresaRutledge/CosmopolitanTastes"
                target="_blank"
              >
                <i className="fa fa-github background-blue"></i>
              </a>
            </SGithub>
          </div>
          <a href="http://cosmopolitan-tastes.herokuapp.com/" target="_blank">
            <SVideo poster={cosmoPoster} autoPlay muted loop>
              <source src={cosmoPreview} type="video/mp4" />
            </SVideo>
          </a>
        </SCard>

        <SCard className="col s12 m6">
          <h3>The Craver</h3>
          <div className="row">
            <SType className="col">Bootcamp Project</SType>
            <SGithub className="col">
              <a
                className="btn-floating social github background-blue"
                href="https://github.com/scotitakura/fun-challenge-project"
                target="_blank"
              >
                <i className="fa fa-github background-blue"></i>
              </a>
            </SGithub>
          </div>
          <a
            href="https://ngdino.github.io/fun-challenge-project/"
            target="_blank"
          >
            <SVideo poster={cravePoster} autoPlay muted loop>
              <source src={cravePreview} type="video/mp4" />
            </SVideo>
          </a>
        </SCard>
      </div>
    </SSection>
  );
}

export default Portfolio;
