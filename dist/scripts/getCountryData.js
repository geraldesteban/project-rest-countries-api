"use strict";
import { countriesContainer } from "./variables.js";
import { renderCountry } from "./displayCountry.js";

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

export { getCountryData };
