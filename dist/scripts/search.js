"use strict";
import { searchInput, countriesContainer } from "./script.js";
import { getCountryData } from "./getCountryData.js";

// Search countries
searchInput.addEventListener("input", () => {
  const searchValue = searchInput.value;
  if (searchValue !== "") {
    getCountryData(`name/${searchValue}`);
  } else {
    countriesContainer.innerHTML = "";
  }
});
