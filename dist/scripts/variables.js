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

// Mobile Navigation
const regionLists = document.querySelector(".region-lists");
const filter = document.querySelector(".filter");

export {
  searchInput,
  countriesContainer,
  regions,
  regionLists,
  filter,
  all,
  africa,
  americas,
  asia,
  europe,
  oceania,
};
