import React from "react";

function Footer() {
  return (
    <footer className="page-footer background-green">
      <div className="row">
        <div className="center-align">
          <div className="col s2 offset-s4">
            <a
              className="btn-floating social github background-brown"
              href="https://github.com/scotitakura"
            >
              <i className="fa fa-github background-brown"></i>
            </a>
          </div>
          <div className="col s2 ">
            <a
              className="btn-floating social linkedin background-brown"
              href="https://www.linkedin.com/in/scot-itakura-289376157/"
            >
              <i className="fa fa-linkedin background-brown"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
