import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
import styled from "styled-components";
import resume from "../../assets/images/Scot-Itakura's-Resume.pdf";

const STitle = styled.div`
  width: 400px;
  font-size: 20px;
  font-weight: bold;
  margin: -30px 0 0 0;
  text-align: left;
`

const SSection = styled.section`
margin: -70vh 0 0 8%;
position: absolute;
padding: 5px 30px 5px 30px;
@media (max-width: 700px) {
  width: 70%;
}
@media (max-width: 530px) {
  margin: -60vh 0 0 20px;
  width: 70%;
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
  width: 80%
}
@media (max-height: 300px) {
  margin-top: -35vh;
  width: 80%
}
  // @media (max-height: 650px) {
  //   margin-top: -70vh;
  // }
  // @media (max-height: 600px) {
  //   margin-top: -65vh;
  // }
  // @media (max-height: 550px) {
  //   margin-top: -60vh;
  // }
  // @media (max-height: 500px) {
  //   margin-top: -55vh;
  // }
  // @media (max-height: 450px) {
  //   margin-top: -50vh;
  // }
  // @media (max-height: 400px) {
  //   margin-top: -45vh;
  // }
  // @media (max-height: 350px) {
  //   margin-top: -40vh;
  // }
  // @media (max-height: 300px) {
  //   margin-top: -35vh;
  // }
`;

const SLi = styled.li`
  margin-top: 10px;
`;

const SI = styled.i`
  margin-bottom: 10px;
`;

function Resume() {
  const currentCategory = { name: "resume", description: "Resume page" };
  return (
    <SSection className="container">
      <STitle className="row">
        <h1 className="col">{capitalizeFirstLetter(currentCategory.name)}</h1>
        <a className="col s1" href={resume} target="_blank" rel="noreferrer">
          <i class="material-icons">picture_as_pdf</i>
        </a>
      </STitle>
      <div>
        <h4>Work Experience</h4>
        <div className="indent">
          <div className="row">
            <h5 className="col s9">Comunity Integration Assistant</h5>
            <div className="col s3">
              <p className="right-align">(2020-Present)</p>
            </div>
            <SI className="col s12">Ability Now Bay Area | Oakland, CA</SI>
            <SLi className="col s12">
              Educate and empower adults with disabilities and their families
              through advocacy, wellness, and building independence over online
              classes from the safety of their homes.
            </SLi>
          </div>
          <div className="row">
            <h5 className="col s9">Staff Engineer</h5>
            <div className="col s3">
              <p className="right-align">(2019)</p>
            </div>
            <SI className="col s12">
              Berlogar, Stevens &amp; Associates | Pleasanton, CA
            </SI>
            <SLi className="col s12">
              Support Project Managers with tasks associated with subsurface
              exploration including laboratory testing, construction monitoring
              and testing services during mass grading, foundation preparation,
              pile installation, and tieback installation.
            </SLi>
          </div>
          <div className="row">
            <h5 className="col s9">Geotechnical Engineering Technician</h5>
            <div className="col s3">
              <p className="right-align">(2018-2019)</p>
            </div>
            <SI className="col s12">Cornerstone Earth Group | Sunnyvale, CA</SI>
            <SLi className="col s12">
              Conduct geotechnical site observations of earthwork, utility
              backfill, drainage improvements, excavations, and foundation
              construction.
            </SLi>
          </div>
        </div>

        <h4>Education</h4>
        <div className="indent">
          <div className="row">
            <h5 className="col s9">Full-Stack Web Development Certification</h5>
            <div className="col s3">
              <p className="right-align">2020</p>
            </div>
            <i className="col s12">University of California, Berkeley</i>
          </div>
          <div className="row">
            <h5 className="col s9">Earth Science, Bachelor of Science</h5>
            <div className="col s3">
              <p className="right-align">(2014-2018)</p>
            </div>
            <i className="col s12">University of California, Santa Cruz</i>
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
                <li>Node.js</li>
                <li>Express</li>
                <li>Styled Components</li>
                <li>Materialize</li>
                <li>Bootstrap</li>
                <li>Handlebars.js</li>
              </ul>
              &nbsp;
            </li>
            Bachelor of Science Coding Programs
            <li>
              <ul className="browser-default text-small">
                <li>MATLAB</li>
                <li>Python</li>
                <li>Scipy</li>
                <li>GIS (ArcGIS)</li>
                <li>Microsoft Excel</li>
                <li>STELLA</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </SSection>
  );
}

export default Resume;
