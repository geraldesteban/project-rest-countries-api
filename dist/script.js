"use strict";
// Countries container
const countriesContainer = document.querySelector(".country-card");

// Regions navigation
const all = document.querySelector("#all");
const africa = document.querySelector("#africa");
const americas = document.querySelector("#americas");
const asia = document.querySelector("#asia");
const europe = document.querySelector("#europe");
const oceania = document.querySelector("#oceania");

// Regions array
const regions = ["all", "africa", "americas", "asia", "europe", "oceania"];

// Search
const searchInput = document.querySelector(".search-country");

// Regions navigation loop
regions.forEach(region => {
  const regionLists = document.querySelector(`#${region}`);
  regionLists.addEventListener("click", function () {
    regions.forEach(r => {
      document
        .querySelector(`#${r}`)
        .classList.remove("underline", "underline-offset-8");
    });

    regionLists.classList.add("underline", "underline-offset-8");
    getCountryData(region === "all" ? "all" : `region/${region}`);
  });
});

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

// Get country data
const getCountryData = async country => {
  try {
    const resAPI = await fetch(`https://restcountries.com/v3.1/${country}`);

    if (!resAPI.ok) {
      throw new Error(`HTTP error! Status: ${resAPI.status}`);
    }

    const resData = await resAPI.json();

    if (!Array.isArray(resData)) {
      throw new Error(`Invalid response data format`);
    }

    countriesContainer.innerHTML = "";

    if (resData.length === 0) {
      countriesContainer.innerHTML = "No matching countries found.";
    } else {
      resData.forEach(rd => {
        renderCountry(rd);
      });
    }
  } catch (err) {
    countriesContainer.innerHTML =
      "Error fetching country data. Enter valid country.";
  }
};

// Search countries
searchInput.addEventListener("input", () => {
  const searchValue = searchInput.value;
  if (searchValue !== "") {
    getCountryData(`name/${searchValue}`);
  } else {
    countriesContainer.innerHTML = "";
  }
});

const regionLists = document.querySelector(".region-lists");
const filter = document.querySelector(".filter");

filter.addEventListener("click", () => {
  regionLists.classList.toggle("max-lg:hidden");
});
