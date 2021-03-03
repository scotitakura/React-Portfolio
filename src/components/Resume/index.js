import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";import styled from "styled-components";
import px2vw from "../../utils/px2vw";

const SSection = styled.h4`
  color: white !important;
`

function Resume() {
  const currentCategory = { name: "resume", description: "Resume page" };
  return (
    <section className="container">
      {/* <h3>{capitalizeFirstLetter(currentCategory.name)}</h3> */}
      <div>
        <SSection>Work Experience</SSection>
        <div className="indent">
          <div className="row">
            <h5 className="col s9">Ability Now Bay Area</h5>
            <div className="col s3">
              <p className="right-align">(2020-Present)</p>
            </div>
            <i className="col s12">Comunity Integration Assistant</i>
          </div>
          <div className="row">
            <h5 className="col s9">Berlogar, Stevens &amp; Associates</h5>
            <div className="col s3">
              <p className="right-align">(2019)</p>
            </div>
            <i className="col s12">Staff Engineer</i>
          </div>
          <div className="row">
            <h5 className="col s9">Cornerstone Earth Group</h5>
            <div className="col s3">
              <p className="right-align">(2018-2019)</p>
            </div>
            <i className="col s12">Geotechnical Engineering Technician</i>
          </div>
        </div>
        
        <h4>Education</h4>
        <div className="indent">
          <div className="row">
            <h5 className="col s9">Berkeley Coding Bootcamp</h5>
            <div className="col s3">
              <p className="right-align">(June-Oct 2020)</p>
            </div>
          </div>
          <div className="row">
            <h5 className="col s9">University of California, Santa Cruz</h5>
            <div className="col s3">
              <p className="right-align">(2014-2018)</p>
            </div>
            <i className="col s12">Earth Science, Bachelor of Science</i>
          </div>
        </div>
        <h4>Programs and Skills</h4>
        <div className="indent">
          <ul className="font-med">
            Front-End Technical Skills
            <li>
              <ul className="browser-default text-small">
                <li>HTML</li>
                <li>CSS</li>
                <li>JS</li>
                <li>React</li>
                <li>Handlebars</li>
              </ul>
            </li>
            Bachelor of Science Coding Programs
            <li>
              <ul className="browser-default text-small">
                <li>MATLAB</li>
                <li>Python</li>
                <li>Scipy</li>
                <li>GIS (ArcGIS)</li>
                <li>Microsoft Excel</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Resume;
