`use strict`;
// query selector is just like a css selector, works the same way
let goatContainer = document.querySelector(`section`);
let image1 = document.querySelector(`section img:first-child`);
let image2 = document.querySelector(`section img:nth-child(2)`);
let resultsButton = document.getElementById(`results`);

let index1 = 0;
let index2 = 0;
let clicks = 0;

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

let goat1 = new Goat(`Timmy`, `imgcruisin-goat.jpg`);
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
  index1 = getRandomIndex();
  index2 = getRandomIndex();
  // This prevents the same images from appearing
  while (index1 === index2) {
    index2 = getRandomIndex();
  }

  let firstGoat = goats[index1];
  let secondGoat = goats[index2];

  // DOM manipulation
  // This replaces the src for the image with the img src from the goat variable
  image1.src = firstGoat.src;
  image1.alt = firstGoat.name;
  image1.title = firstGoat.name
  image1.id = index1;

  image2.src = secondGoat.src;
  image2.alt = secondGoat.name;
  image2.title = secondGoat.name;
  image2.id = index2;

  // increment views
  firstGoat.views++;
  secondGoat.views++;
}

// Event handler
// what happens when a user clicks a goat?
//  increment goats .clicks
// render 2 new goats
function handleGoatClick(event) {
  clicks++;
  // the event object knows about the event and the element targeted

  // how to increment the correct goat's .clicks
  // Option 1 using For Loop***************************************
  // if goat[i].alt = event.target.alt, then increment clicks
  // for(let i = 0; i < goats.length; i++){
  //   if (goats[i].name == event.target.alt){
  //     goats[i].clicks++;
  //   }
  // }
  //Option2 **************************
  //use global index variables
  // if (goats[index1].name = event.target.alt){
  //   goats[index1].clicks++;
  // }
  // if (goats[index2].name = event.target.alt){
  //   goats[index2].clicks++;
  // }

  // Option 3, using ID***************************
  goats[event.target.id].clicks++;
  if (clicks >10){
    image1.removeEventListener(`click`, handleGoatClick);
    image2.removeEventListener(`click`, handleGoatClick);
  }

  console.log(goats);
  renderGoats();
}

// When user clicks on viewresults, it shows the info we gathered.
function viewResults(event){
  let ul = document.querySelector(`ul`);
  // Make one li for each goat inside goats[]
  for(let i = 0; i < goats.length; i++){
    let li = document.createElement(`li`);
    li.innerText = `${goats[i].name} was viewed ${goats[i].views} times and was clicked on ${goats[i].clicks} times.`;
    ul.appendChild(li);
  }

  //Chart

  // get my goat names, clicks and views into an array
  // Think about making this an object
// the starter code for this chart comes from chartjs.org
  let goatNames = [];
  let goatClicks =[];
  for (let i = 0; i < goats.length; i++){
    goatNames.push(goats[i].name);
    goatClicks.push(goats[i].clicks);
  }
  console.log(`the goatNames are: ${goatNames}`);
  console.log(`the goatClicks are: ${goatClicks}`);



  const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: goatNames,// X axis
      datasets: [{
        label: '# of Clicks per Goat',//title
        data: goatClicks,//Y axis
        borderWidth: 1
        backgroundColor: rgba(157, 157, 157, 0.1);
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  // Not a great way to remove this item
  resultsButton.removeEventListener(`click`, viewResults);
}

// On page load
image1.addEventListener(`click`, handleGoatClick);
image2.addEventListener(`click`, handleGoatClick);
resultsButton.addEventListener(`click`, viewResults);
renderGoats();
