import React, { useState, useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
// import Footer from "../Footer/index.js";
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
import styled from "styled-components";

init("user_1TsQ5BV4LDT1zGE1UQFcc");

const SSection = styled.section`
  margin-top: -70vh;
`;

const SFooter = styled.footer`
  background-color: transparent;
`;

const SDiv = styled.div`
  padding: 0 0 0 0;
`;

const SColumn = styled.div`
  position: absolute;
  margin: -73px 0 0 110px;
  @media (min-width: 697px) {
    margin: -73px 0 0 360px;
  }
  @media (min-width: 768px) {
    margin: -73px 0 0 360px;
  }
`;

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
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <SSection className="container">
      <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
      <SFooter>
        <SColumn className="row">
          <SDiv className="col">
            <a
              className="btn-floating social github background-blue"
              href="https://github.com/scotitakura"
            >
              <i className="fa fa-github background-blue"></i>
            </a>
          </SDiv>
          <SDiv className="col">
            <a
              className="btn-floating social linkedin background-blue"
              href="https://www.linkedin.com/in/scot-itakura-289376157/"
            >
              <i className="fa fa-linkedin background-blue"></i>
            </a>
          </SDiv>
        </SColumn>
      </SFooter>
      <form className="contact-form" onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" />
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
      {/* <div className="row">
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
      </a> */}
    </SSection>
  );
}

export default Contact;
