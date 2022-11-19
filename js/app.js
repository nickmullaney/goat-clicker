`use strict`;
// query selector is just like a css selector, works the same way
let image1 = document.querySelector(`section img:first-child`)

//we can use a goat constructor
//clicks
//views
//src/goat picture details
//name

function Goat(name, src, clicks, views){
  this.name = name;
  this.src = src;
  this.clicks = 0;
  this.views = 0;
}

let goat1 = new Goat(`Timmy`, `.img/cruisin-goat.jpg`);
let goat2 = new Goat(`Tanya`, `.img/goat-out-of-hand.jpg`);
let goat3 = new Goat(`Erica`, `.img/sassy-goat.jpg`);
let goats = [goat1,goat2,goat3];

// get random goat index
function getRandomIndex(){
  // possible return values: 0, 1, 2
  return Math.floor(Math.random() * goats.length) // Math.random() ** goats.length returns number between 0-2.9999999. Math.floor() will equal 0,1,2
}

// render function: invoke function on page load, I want to load 2 random goats
function renderGoats(){
  let firstGoat = goats[getRandomIndex()];
  let secondGoat = goats[getRandomIndex()];

  // DOM manipulation

}

// Event handler