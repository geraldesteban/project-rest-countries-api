"use strict";

const countriesContainer = document.querySelector(".country-card");
const renderCountry = function (data) {
  const html = `
    <article class="country bg-white w-72 rounded-tl-md rounded-tr-md">
        <img class="country-img w-72 rounded-tl-md rounded-tr-md" src="${data.flags.png}" />
        <div class="country-data p-8">
        <h2 class="country-name text-xl text-center font-bold mb-5">${data.name.common}</h3>
            <p class="country-population font-bold mb-1">Population: <span class="font-light">${data.population}</span></p>
            <p class="country-region font-bold mb-1">Region: <span class="font-light">${data.region}</span></p>
            <p class="country-capital font-bold">Capital: <span class="font-light">${data.capital}</span></p>
        </div>
    </article>
    `;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = "1";
};

const getCountryDataAll = async function () {
  try {
    const resAPI = await fetch(`https://restcountries.com/v3.1/all
    `);
    const resData = await resAPI.json();
    resData.forEach(rd => {
      renderCountry(rd);
    });
  } catch (err) {}
};
// getCountryDataAll();
