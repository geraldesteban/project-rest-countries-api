"use strict";
import { countriesContainer } from "./script.js";
// Display countries
const renderCountry = data => {
  const html = `
    <article class="country bg-white w-72 rounded-tl-md rounded-tr-md">
        <img class="country-img w-72 rounded-tl-md rounded-tr-md" src="${
          data.flags.png
        }" />
        <div class="country-data p-8">
        <h2 class="country-name text-xl text-center font-bold mb-5">${
          data.name.common
        }</h3>
            <p class="country-population font-bold mb-1">Population: <span class="font-light">${data.population.toLocaleString()}</span></p>
            <p class="country-region font-bold mb-1">Region: <span class="font-light">${
              data.region
            }</span></p>
            <p class="country-capital font-bold">Capital: <span class="font-light">${
              data.capital
            }</span></p>
        </div>
    </article>
    `;

  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = "1";
};

export { renderCountry };
