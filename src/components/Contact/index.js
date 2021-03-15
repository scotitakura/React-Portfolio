import React, { useState, useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
// import Footer from "../Footer/index.js";
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
import styled from "styled-components";

init("user_1TsQ5BV4LDT1zGE1UQFcc");

const SSection = styled.section`
  margin: -70vh 0 0 10%;
  width: 50%;
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
  @media (max-width: 697px) {
    margin: -73px 0 0 110px;
  }
  @media (min-width: 697px) {
    margin: -73px 0 0 380px;
  }
  @media (min-width: 768px) {
    margin: -73px 0 0 380px;
  }
`;

const SLabel = styled.label`
  font-size: 17px;
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
  
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_5wt7xqc', 'template_4sin1m8', e.target, 'user_1TsQ5BV4LDT1zGE1UQFcc')
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
        <SLabel className="color-white">Name</SLabel>
        <input type="text" name="user_name" />
        <SLabel className="color-white">Email</SLabel>
        <input type="email" name="user_email" />
        <SLabel className="color-white">Message</SLabel>
        <textarea name="message" />
        <input className="btn color-white background-blue" type="submit" value="Send" />
      </form>
    </SSection>
  );
}

export default Contact;
