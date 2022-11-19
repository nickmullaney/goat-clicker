`use strict`;
// query selector is just like a css selector, works the same way
let image1 = document.querySelector(`section img:first-child`);
let image2 = document.querySelector(`section img:nth-child(2)`);
let index1 = 0;
let index2 = 0;

//we can use a goat constructor
//clicks
//views
//src/goat picture details
//name

function Goat(name, src) {
  this.name = name;
  this.src = src;
  this.clicks = 0;
  this.views = 0;
}

let goat1 = new Goat(`Timmy`, `img/cruisin-goat.jpg`);
let goat2 = new Goat(`Tanya`, `img/goat-out-of-hand.jpg`);
let goat3 = new Goat(`Erica`, `img/sassy-goat.jpg`);
let goats = [goat1, goat2, goat3];

// get random goat index
function getRandomIndex() {
  // possible return values: 0, 1, 2
  return Math.floor(Math.random() * goats.length) // Math.random() ** goats.length returns number between 0-2.9999999. Math.floor() will equal 0,1,2
}

// render function: invoke function on page load, I want to load 2 random goats
function renderGoats() {
  let firstGoat = goats[getRandomIndex()];
  let secondGoat = goats[getRandomIndex()];

  // This prevents the same images from appearing
  while(index1 === index2){
    index2 = getRandomIndex();
  }

  // DOM manipulation
  // This replaces the src for the image with the img src from the goat variable
  image1.src = firstGoat.src;
  image1.alt = firstGoat.name;
  image1.title = firstGoat.name
  image2.src = secondGoat.src;
  image2.alt = secondGoat.name;
  image2.title = secondGoat.name;

  // increment views
  firstGoat.views++;
  secondGoat.views++;
 }

// Event handler
// what happens when a user clicks a goat?
//  increment goats .clicks
// render 2 new goats
function handleGoatClick(event){
  // the event object knows about the event and the element targeted

  // how to increment the correct goat's .clicks
  // if goat[i].alt = event.target.alt, then increment clicks
  //another method
  //use global index variables
  if (goats[index1].name = event.target.alt){
    goats[index1].clicks++
  }
  if (goats[index2].name = event.target.alt){
    goats[index2].clicks++
  }

  console.log(goats);
  renderGoats();
}

// On page load
image1.addEventListener(`click`, handleGoatClick);
image2.addEventListener(`click`, handleGoatClick);
renderGoats();