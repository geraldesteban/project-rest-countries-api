"use strict";

const countriesContainer = document.querySelector(".country-card");
const renderCountry = function (data) {
  const html = `
    <article class="country bg-white w-72 py-10">
        <img class="country-img w-72 rounded-tl-md rounded-tr-md" src="${
          data.flags.png
        }" />
        <div class="country-data p-8">
        <h2 class="country-name text-xl font-bold mb-5">${data.name.common}</h3>
            <p class="country-population font-bold mb-1">Population: ${(
              +data.population / 1000000
            ).toFixed(1)}</p>
            <p class="country-region font-bold mb-1">Region: ${data.region}</p>
            <p class="country-capital font-bold">Capital: ${data.capital}</p>
        </div>
    </article>
    `;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = "1";
};

const getCountryDataAll = async function () {
  try {
    // Country data
    const resAPI = await fetch(`https://restcountries.com/v3.1/all
    `);
    const resData = await resAPI.json();
    console.log(resData);
    resData.forEach(rd => {
      console.log(rd);
      renderCountry(rd);
    });
    // renderCountry(resData);
  } catch (err) {
    console.error(err);
  }
};
getCountryDataAll();
