import React from 'react';
// import Navigation from '../Navigation/index.js' 
import { capitalizeFirstLetter } from '../../utils/helpers';


function Header(props) {
  const {
    categories = [],
    setCurrentCategory,
    // currentCategory,
  } = props;

  return (
    <header className="flex-row px-1">
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about">
              About me
            </a>
          </li>
          <li className="mx-2">
            <span>Contact</span>
          </li>
          {categories.map((category) => (
              <span
                onClick={() => {
                  setCurrentCategory(category)
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            // </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;