import React, { useState, useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
import Footer from "../Footer/index.js";
import styled from "styled-components";

const SFooter = styled.footer`
  background-color: transparent;
`

const SDiv = styled.div`
  padding: 0 0 0 0;
`

const SColumn = styled.div`
  position: absolute;
  margin: -140px 0 0 400px;
`

function Contact() {
  const [btnClass, setBtnClass] = useState("btn disabled");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contents, setContents] = useState("");

  const handleClick = () => {
    console.log("SUBMITTING");
  };

  useEffect(() => {
    console.log("is rerendering", name);
    if (name && email && contents) {
      setBtnClass("btn");
    } else {
      setBtnClass("btn disabled");
    }
  }, [name]);

  const currentCategory = {
    name: "contact me",
    description: "Contact me page",
  };

  return (
    <section className="container">
      <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
      <SFooter>
        <SColumn className="right-align">
          <SDiv className="row">
            <a
              className="btn-floating social github background-blue"
              href="https://github.com/scotitakura"
            >
              <i className="fa fa-github background-blue"></i>
            </a>
          </SDiv>
          <SDiv className="row">
            <a
              className="btn-floating social linkedin background-blue"
              href="https://www.linkedin.com/in/scot-itakura-289376157/"
            >
              <i className="fa fa-linkedin background-blue"></i>
            </a>
          </SDiv>
        </SColumn>
      </SFooter>
      <div className="row">
        <div className="input-field col s12">
          <input
            id="name"
            value={name}
            type="text"
            className="validate"
            required
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="name">Name</label>
        </div>
        <div className="input-field col s12">
          <input
            id="email"
            value={email}
            type="email"
            className="validate"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="email">Email</label>
        </div>
        <div className="input-field col s12">
          <textarea
            id="textarea1"
            value={contents}
            className="materialize-textarea validate"
            required
            onChange={(e) => setContents(e.target.value)}
          />
          <label htmlFor="textarea1">Contents</label>
        </div>
      </div>
      <a className={btnClass} onClick={() => handleClick()}>
        Button
      </a>
    </section>
  );
}

export default Contact;
