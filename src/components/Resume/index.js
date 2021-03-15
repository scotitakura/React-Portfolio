import React from "react";
import styled from "styled-components";
import resume from "../../assets/images/resume.pdf"

const SSection = styled.section`
  margin-top: -70vh;
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
      {/* <h3>{capitalizeFirstLetter(currentCategory.name)}</h3> */}
      <div>
        <div className="row">
          <h4 className="col">Work Experience</h4>
          <a className="col hov" href={resume} target="_blank">
            <i class="material-icons">picture_as_pdf</i>
          </a>
        </div>
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
