import React from 'react';

function Contact() {
  const currentCategory = {
    name: "contact me",
    description:
      "Contact me page",
  };
  return (
    <section>
      <h1>{currentCategory.name}</h1>
      <p>{currentCategory.name}</p>
      <div className="flex-row">
      </div>
    </section>
  );
}

export default Contact;