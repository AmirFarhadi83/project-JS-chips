"use strict";

// Show Menu
const navMenu = document.querySelector("#nav-menu");
const navToggle = document.querySelector("#nav-toggle");
const navClose = document.querySelector("#nav-close");

// Show Menu
navToggle && navToggle.addEventListener('click',() => {
    navMenu.classList.add("show-menu")
});

// Hide Menu
navClose && navClose.addEventListener('click',() => {
    navMenu.classList.remove("show-menu")
});