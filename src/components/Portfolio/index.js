import React from "react";
import qualitrees from "../../assets/images/QualitreesPreview.PNG";
import cosmo from "../../assets/images/CosmopolitianTastes-img.PNG";
import craver from "../../assets/images/The-Craver.PNG";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Portfolio() {
  const currentCategory = {
    name: "portfolio",
    description: "Portfolio page",
  };
  return (
    <section className="container">
      <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p>A collection of my past and current projects.</p>
      <div className="container">
        <div className="row">
          <div className="col s12 m6">
            <h3>Qualitrees</h3> 
            <div className="row">
              <p className="col s5 text-med">Freelance Project</p>
              <div className="col s1 bump-down">
                <a
                  className="btn-floating social github background-brown"
                  href="https://github.com/scotitakura"
                  >
                  <i className="fa fa-github background-brown"></i>
                </a>
              </div>
            </div>
            <img className="image-size" src={qualitrees} alt="Qualitrees Web Page" />
          </div>
          <div className="col s12 m6">
            <h3>Qualitrees</h3> 
            <div className="row">
              <p className="col s5 text-med">Freelance Project</p>
              <div className="col s1 bump-down">
                <a
                  className="btn-floating social github background-brown"
                  href="https://github.com/scotitakura"
                  >
                  <i className="fa fa-github background-brown"></i>
                </a>
              </div>
            </div>
            <img className="image-size" src={qualitrees} alt="Qualitrees Web Page" />
          </div>
          <div className="col s12 m6">
            <h3>Qualitrees</h3> 
            <div className="row">
              <p className="col s5 text-med">Freelance Project</p>
              <div className="col s1 bump-down">
                <a
                  className="btn-floating social github background-brown"
                  href="https://github.com/scotitakura"
                  >
                  <i className="fa fa-github background-brown"></i>
                </a>
              </div>
            </div>
            <img className="image-size" src={qualitrees} alt="Qualitrees Web Page" />
          </div>
          <div className="col s12 m6">
            <h3>Qualitrees</h3> 
            <div className="row">
              <p className="col s5 text-med">Freelance Project</p>
              <div className="col s1 bump-down">
                <a
                  className="btn-floating social github background-brown"
                  href="https://github.com/scotitakura"
                  >
                  <i className="fa fa-github background-brown"></i>
                </a>
              </div>
            </div>
            <img className="image-size" src={qualitrees} alt="Qualitrees Web Page" />
          </div>
          <div className="col s12 m6">
            <h3>Qualitrees</h3> 
            <div className="row">
              <p className="col s5 text-med">Freelance Project</p>
              <div className="col s1 bump-down">
                <a
                  className="btn-floating social github background-brown"
                  href="https://github.com/scotitakura"
                  >
                  <i className="fa fa-github background-brown"></i>
                </a>
              </div>
            </div>
            <img className="image-size" src={qualitrees} alt="Qualitrees Web Page" />
          </div>
          <div className="col s12 m6">
            <h3>Qualitrees</h3> 
            <div className="row">
              <p className="col s5 text-med">Freelance Project</p>
              <div className="col s1 bump-down">
                <a
                  className="btn-floating social github background-brown"
                  href="https://github.com/scotitakura"
                  >
                  <i className="fa fa-github background-brown"></i>
                </a>
              </div>
            </div>
            <img className="image-size" src={qualitrees} alt="Qualitrees Web Page" />
          </div>
        </div>


        <h3>The Craver</h3>
        <p>Class Group Project</p>
        <img className="image-size" src={craver} alt="Craver Web Page" />

        <h3>CosmopolitianTastes</h3>
        <p>Class Group Project</p>
        <img className="image-size" src={cosmo} alt="ComsopolitianTastes Web Page" />
      </div>
    </section>
  );
}

export default Portfolio;
