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
const STitle = styled.div`
  width: 100%;
  font-size: 20px;
  font-weight: bold;
  padding: 0 20px;
  text-align: center;
  z-index: -3;

  @media (min-width: 768px) {
    width: 100% !important;
  }
  @media (min-aspect-ratio: 513/490) {
    width: 70% !important;
  }
`;
const SSection = styled.section`
  margin: -70vh 0 0 0;
  position: absolute;

  @media (max-aspect-ratio: 513/490) {
    width: 100%;
  }
  @media (min-aspect-ratio: 202/135) {
    margin: -70vh 0 0 0;
  }
  @media (max-height: 900px) {
    margin-top: -75vh;
  }
  @media (max-height: 800px) {
    margin-top: -70vh;
  }
  @media (max-height: 700px) {
    margin-top: -65vh;
  }
  @media (max-height: 600px) {
    margin-top: -60vh;
  }
  @media (max-height: 550px) {
    margin-top: -60vh;
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
  }
  @media (max-height: 300px) {
    margin-top: -35vh;
  }
`;
const SP = styled.p`
  font-size: 22px;
  font-weight: normal;
`;
const SCard = styled.div`
  color: black;
  border-radius: 5px;
  width: 50% !important;
  font-size: 20px;
  font-weight: bold;
  padding: 15px 25px;
  text-align: center;
  z-index: -1;

  @media (max-width: 768px) {
    width: 100% !important;
  }
  @media (min-aspect-ratio: 513/490) {
    width: 35% !important;
  }
`;
// const STitle = styled.div`
//   width: 100%;
//   font-size: 20px;
//   font-weight: bold;
//   padding: 0 20px;

//   @media (max-width: 768px) {
//     width: 100% !important;
//   }
//   @media (min-aspect-ratio: 202/135) {
//     width: 70% !important;
//   }
//   text-align: center;
//   z-index: -3;
// `;
// const SSection = styled.section`
//   margin: -70vh 0 0 0;
//   position: absolute;

//   @media (max-width: 700px) {
//     width: 100%;
//   }
//   @media (max-aspect-ratio: 202/135) {
//     margin: -70vh 0 0 0;
//   }
//   @media (max-height: 900px) {
//     margin-top: -75vh;
//   }
//   @media (max-height: 800px) {
//     margin-top: -70vh;
//   }
//   @media (max-height: 700px) {
//     margin-top: -65vh;
//   }
//   @media (max-height: 600px) {
//     margin-top: -60vh;
//   }
//   @media (max-height: 550px) {
//     margin-top: -60vh;
//   }
//   @media (max-height: 500px) {
//     margin-top: -55vh;
//   }
//   @media (max-height: 450px) {
//     margin-top: -50vh;
//   }
//   @media (max-height: 400px) {
//     margin-top: -45vh;
//   }
//   @media (max-height: 350px) {
//     margin-top: -40vh;
//   }
//   @media (max-height: 300px) {
//     margin-top: -35vh;
//   }
// `;
// const SP = styled.p`
//   font-size: 22px;
//   font-weight: normal;
// `;
// const SCard = styled.div`
//   color: black;
//   border-radius: 5px;
//   width: 50% !important;
//   font-size: 20px;
//   font-weight: bold;
//   padding: 15px 25px;
//   text-align: center;
//   z-index: -1;

//   @media (max-width: 768px) {
//     width: 100% !important;
//   }
//   @media (min-aspect-ratio: 202/135) {
//     width: 35% !important;
//   }
// `;
const SType = styled.p`
  width: 25%;
  margin: 0 15% 0 20%;

  @media (max-width: 768px) {
    width: 100%;
    margin: 0 0 0 0;
  }
  @media (min-width: 1024px) {
    width: 35%;
    margin: 0 0 0 15%;
  }
`;
const SGithub = styled.div`
  width: 25%;
  margin: 10px 15% 0 0;

  @media (max-width: 768px) {
    width: 100%;
    margin: 10px 0 0 0;
  }
  @media (min-width: 1024px) {
    width: 35%;
    margin: 0 15% 0 0;
  }
`;
const SDescription = styled.div`
  font-weight: normal;
  margin-left: 10%;
  margin-right: 10%;
`;
const SUL = styled.ul`
  margin-left: 10%;
  margin-right: 10%;
`;
const SLI = styled.li`
  font-weight: normal;
`;

const SVideo = styled.video`
  width: 80%;
  height: auto;
  opacity: 1;
  border-style: solid;
  border-width: 2px;
  border-radius: 10px;
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
        <SCard className="col s12 m6">
          <h3>Qualitrees</h3>
          <div className="row">
            <SType className="col">Freelance Project</SType>
            <SGithub className="col">
              <a
                className="btn-floating social github background-blue"
                href="https://github.com/scotitakura/QualiTrees"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-github background-blue"></i>
              </a>
            </SGithub>
          </div>
          <a
            href="https://qualitrees-503dd.web.app/"
            target="_blank"
            rel="noreferrer"
          >
            <SVideo poster={qualitreesPoster} autoPlay muted loop>
              <source src={qualitreesPreview} type="video/mp4" />
            </SVideo>
          </a>
          <SDescription>
            An corporations application to show potential clients an overview of
            the company of QualiTrees. This platform is the companies business
            card, allowing users to learn more about QualiTrees and why it is a
            successful and reliable business for everyday cannabis use. Website
            link&nbsp;
            <a
              href="https://qualitrees-503dd.web.app/"
              target="_blank"
              rel="noreferrer"
            >
              here
            </a>
            .
          </SDescription>
          <SUL>
            Built with:
            <SLI>React</SLI>
            <SLI>JavaScript</SLI>
            <SLI>CSS</SLI>
            <SLI>Node.js</SLI>
            <SLI>Styled Components</SLI>
            <SLI>Materialize</SLI>
            <SLI>Deployed with Google Firebase</SLI>
          </SUL>
        </SCard>
        
        <SCard className="col">
          <h3>Garage Collage</h3>
          <div className="row">
            <SType className="col">Bootcamp Project</SType>
            <SGithub className="col">
              <a
                className="btn-floating social github background-blue"
                href="https://github.com/jennifermulder/garage-endeavor"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-github background-blue"></i>
              </a>
            </SGithub>
          </div>
          <a
            href="https://garage-collage-2468.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            <SVideo poster={garagePoster} autoPlay muted loop>
              <source src={garagePreview} type="video/mp4" />
            </SVideo>
          </a>
          <SDescription>
            An e-commerce application catering to the needs of a recent/frequent
            mover looking to buy/sell lightly used goods at a bargin. This
            platform is a virtual garage sale, allowing users from al over the
            capability to purchase and purge on a world-wide scale. Website
            link&nbsp;
            <a
              href="https://garage-collage-2468.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              here
            </a>
            .
          </SDescription>
          <SUL>
            Built with:
            <SLI>React</SLI>
            <SLI>JavaScript</SLI>
            <SLI>CSS</SLI>
            <SLI>Styled Components</SLI>
            <SLI>Apollo</SLI>
            <SLI>GraphQL</SLI>
            <SLI>Node.js</SLI>
            <SLI>NoSQL - MongoDB</SLI>
            <SLI>Mongoose</SLI>
            <SLI>Concurrently</SLI>
            <SLI>Deployed with Heroku</SLI>
          </SUL>
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
                rel="noreferrer"
              >
                <i className="fa fa-github background-blue"></i>
              </a>
            </SGithub>
          </div>
          <a
            href="http://cosmopolitan-tastes.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            <SVideo poster={cosmoPoster} autoPlay muted loop>
              <source src={cosmoPreview} type="video/mp4" />
            </SVideo>
          </a>
          <SDescription>
            The Craver is a simple search application using restful API's to
            help you decide what to eat. If you know what you want to eat, but
            are unsure if you want to cook or dine out, the craver will give you
            an assortment of recipes and nearby restaurants to satisfy your
            craving. This app is fully responsive to all screentypes and
            displays the lists on a clean colapsible style list. It has a
            polished look for the landing page and makes deciding what to have
            for dinner easy! Website link&nbsp;
            <a
              href="http://cosmopolitan-tastes.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              here
            </a>
            .
          </SDescription>
          <SUL>
            Built with:
            <SLI>JavaScript</SLI>
            <SLI>CSS</SLI>
            <SLI>Node.js</SLI>
            <SLI>Express.js</SLI>
            <SLI>MySQL</SLI>
            <SLI>Deployed with Heroku</SLI>
          </SUL>
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
                rel="noreferrer"
              >
                <i className="fa fa-github background-blue"></i>
              </a>
            </SGithub>
          </div>
          <a
            href="https://ngdino.github.io/fun-challenge-project/"
            target="_blank"
            rel="noreferrer"
          >
            <SVideo poster={cravePoster} autoPlay muted loop>
              <source src={cravePreview} type="video/mp4" />
            </SVideo>
          </a>
          <SDescription>
            Create, Find, Share and Vote on your best recipes with the world
            with Cosmopolitan Tastes! This social platform lets recipe
            enthusiasts easily give or recieve feedback, find and replicate
            recipes, and post their cooking trade secrets! Website link&nbsp;
            <a
              href="https://ngdino.github.io/fun-challenge-project/"
              target="_blank"
              rel="noreferrer"
            >
              here
            </a>
            .
          </SDescription>
          <SUL>
            Built with:
            <SLI>JavaScript</SLI>
            <SLI>CSS</SLI>
            <SLI>Node.js</SLI>
            <SLI>Deployed with GitHub</SLI>
          </SUL>
        </SCard>
      </div>
    </SSection>
  );
}

export default Portfolio;
