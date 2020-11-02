import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Navigation(props) {
  const { categories = [], setCurrentCategory, currentCategory } = props;

  return (
    <header className="flex-row px-1">
      <nav className="nav-wrapper background-brown">
        <a className="color-white font-large title" href="#">
          Scot Itakura
        </a>
        <a href="#" data-target="mobile-demo" class="valign-wrapper sidenav-trigger"><i class="material-icons">menu</i></a>
        <ul id="nav-mobile" className="flex-row hide-on-med-and-down right">
          {categories.map((category) => (
            <li
              className={`mx-2 nav-items ${
                currentCategory.name === category.name && "navActive"
              }`}
              key={category.name}
            >
              <span
                className="cursor-pointer"
                onClick={() => {
                  setCurrentCategory(category);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
        <ul class="sidenav" id="mobile-demo">
          {categories.map((category) => (
            <li
              className={`mx-2 nav-items ${
                currentCategory.name === category.name && "navActive"
              }`}
              key={category.name}
            >
              <span
                className="cursor-pointer"
                onClick={() => {
                  setCurrentCategory(category);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
      <section className="hero" alt="Scot Itakura in front of a waterfall">
        <div></div>
      </section>
    </header>
  );
}

export default Navigation;
