import React from 'react';
import photo from '../../assets/images/The-Craver.PNG';

function Portfolio() {
  const currentCategory = {
    name: "portfolio",
    description:
      "Portfolio page",
  };
  return (
    <section>
      <h1>{currentCategory.name}</h1>
      <p>{currentCategory.name}</p>
      <div className="flex-row">
        <img src={photo} alt="Craver Web Page"/>
      </div>
    </section>
  );
}

export default Portfolio;