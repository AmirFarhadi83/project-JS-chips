"use strict";

// // // // // Show Menu Mobile // // // // //
const navMenu = document.querySelector("#nav-menu");
const navToggle = document.querySelector("#nav-toggle");
const navClose = document.querySelector("#nav-close");

// Show Menu
navToggle &&
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });

// Hide Menu
navClose &&
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });

// // // // // Remove Menu Mobile // // // // //
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  navMenu.classList.remove("show-menu");
}
navLink.forEach((e) => e.addEventListener("click", linkAction));
