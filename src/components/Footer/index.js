import React from "react";
import styled from "styled-components";

const SFooter = styled.footer`
  background-color: transparent;
`

const SDiv = styled.div`
  padding: 0 30px 30px 0;
`

const SColumn = styled.div`
  position: fixed;
  margin-top: -900px;
`

function Footer() {
  return (
    <SFooter>
      <SColumn className="right-align">
        <SDiv className="column">
          <a
            className="btn-floating social github background-blue"
            href="https://github.com/scotitakura"
          >
            <i className="fa fa-github background-blue"></i>
          </a>
        </SDiv>
        <SDiv className="column">
          <a
            className="btn-floating social linkedin background-blue"
            href="https://www.linkedin.com/in/scot-itakura-289376157/"
          >
            <i className="fa fa-linkedin background-blue"></i>
          </a>
        </SDiv>
      </SColumn>
    </SFooter>
  );
}

export default Footer;
