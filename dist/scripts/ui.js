"use strict";
import { regions, regionLists, filter } from "./variables.js";
import { getCountryData } from "./getCountryData.js";

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

// Mobile show and hide navigation
filter.addEventListener("click", () => {
  regionLists.classList.toggle("max-lg:hidden");
  regionLists.classList.add("max-lg:block");
});
