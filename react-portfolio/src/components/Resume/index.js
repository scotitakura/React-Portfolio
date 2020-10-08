import React from 'react';

function Resume() {
  const currentCategory = { name: "resume", description: "Resume page"};
  return (
    <section>
      <h2>{currentCategory.name}</h2>
      <div>
        <h4>Work Experience</h4>
        <div className="container">
          <div className="row">
            <h5 className="col">
              Berkeley Coding Bootcamp
            </h5>
            <p className="right-align col">(June-Oct 2020)</p>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <h5 className="col">
              University of California, Santa Cruz
            </h5>
            <p className="right-align col">(2014-2018)</p>
          </div>
          <dd>Earth Science, Bachelor of Science</dd>
        </div>
        <dl className="font-med">
            - Front-End Technical Skills
          <dt>
            <dd>HTML</dd>
            <dd>CSS</dd>
            <dd>JS</dd>
            <dd>React</dd>
            <dd>Handlebars</dd>
          </dt>
            - Past Coding Experience
          <dt>
            <dd>MATLAB</dd>
            <dd>Python</dd>
            <dd>Scipy</dd>
            <dd>GIS (ArcGIS)</dd>
            <dd>Microsoft Excel</dd>
          </dt>
        </dl>
      </div>
    </section>
  );
}

export default Resume;