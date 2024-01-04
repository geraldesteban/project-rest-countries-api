"use strict";
import { searchInput, countriesContainer, regions } from "./variables.js";
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

// Remove underline and displayed countries
searchInput.addEventListener("click", () => {
  countriesContainer.style.opacity = "0";

  regions.forEach(r => {
    document
      .querySelector(`#${r}`)
      .classList.remove("underline", "underline-offset-8");
  });
});
