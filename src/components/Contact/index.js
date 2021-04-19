import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
import styled from "styled-components";

init("user_1TsQ5BV4LDT1zGE1UQFcc");

const SSection = styled.section`
  margin: -74vh 0 5% 10%;
  width: 50%;
  @media (max-aspect-ratio: 202/135) {
    width: 85%;
  }
  @media (max-height: 500px) {
    margin-top: -70vh;
  }
  @media (max-height: 450px) {
    margin-top: -65vh;
  }
  @media (max-height: 400px) {
    margin-top: -60vh;
  }
  @media (max-height: 350px) {
    margin-top: -55vh;
  }
  @media (max-height: 300px) {
    margin-top: -50vh;
  }
`;

const SDiv = styled.div`
  padding: 0;
  @media (max-width: 514px) {
    padding: 0 .75rem 1.5rem  0.75rem !important;
  }
`;

const SP = styled.p`
  font-size: 17px;
`

const SColumn = styled.div`
  position: absolute;
  margin: -73px 0 0 110px;
  @media (max-width: 377px) {
    margin: -73px 0 0 110px;
  }
  @media (min-width: 377px) {
    margin: -73px 0 0 340px;
  }
  @media (min-width: 768px) {
    margin: -73px 0 0 340px;
  }
  @media (min-width: 1200px) {
    margin: -76px 0 0 340px;
  }
`;

const SLabel = styled.label`
  font-size: 17px;
`;

function Contact() {
  const currentCategory = {
    name: "contact me",
    description: "Contact me page",
  };

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5wt7xqc",
        "template_4sin1m8",
        e.target,
        "user_1TsQ5BV4LDT1zGE1UQFcc"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <SSection className="container">
      <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>

      <SColumn className="row">
        <SDiv className="col">
          <a
            className="btn-floating social github background-blue"
            href="https://github.com/scotitakura"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-github background-blue"></i>
          </a>
        </SDiv>
        <SDiv className="col">
          <a
            className="btn-floating social linkedin background-blue"
            href="https://www.linkedin.com/in/scot-itakura-289376157/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-linkedin background-blue"></i>
          </a>
        </SDiv>
      </SColumn>
      <div className="row">
        <SP>Best Phone Number: (909) 684-1552</SP>
        <SP>Email (this form emails to): scot.itakura@gmail.com</SP>
      </div>
      <form className="contact-form" onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" />
        <SLabel className="color-white">Name</SLabel>
        <input type="text" name="user_name" />
        <SLabel className="color-white">Email</SLabel>
        <input type="email" name="user_email" />
        <SLabel className="color-white">Message</SLabel>
        <textarea name="message" />
        <input
          className="btn color-white background-blue"
          type="submit"
          value="Send"
        />
      </form>
    </SSection>
  );
}

export default Contact;
