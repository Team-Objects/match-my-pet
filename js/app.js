'use strict';

/* needs:

create game board

way to randomize(of shuffle) images

hard code each photo twice (stretch: do we want a way to add more cards and have placeholder photos?)

event handler for click
cardsMatch function - way to determine if cards matched


  */

// DOM references


// global variables
const easyRounds = 15;
const mediumRounds = 10;
const hardRounds = 7;

const cardArray = [];



// constructor functions

function User(userName, difficulty){
  this.userName = userName;
  this.difficulty = difficulty;
  this.gamesWon = 0;
  this.gamesPlayed = 0;
}

function Cards(cardName, fileExstention = 'png'){
  this.cardName = cardName;
  this.img = `assets/${cardName}.${fileExstention}`;

  cardArray.push(this);
}

// instantiating cards

new Cards('greg-facedown');
new Cards('greg-facedown');
new Cards('mochi', 'jpg');
new Cards('mochi', 'jpg');

// executable functions
// Fisher-Yates algorithm
function shuffleArray(tempArr) {
  for (let i = tempArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = tempArr[i];
    tempArr[i] = tempArr[j];
    tempArr[j] = temp;
  }
  console.log(tempArr);
}

shuffleArray(cardArray);

let gameCards = document.getElementsByClassName('card');
console.log(gameCards);

for(let i = 0; i < gameCards.length; i++) {
  gameCards[i].addEventListener('click', handleCardClick);
}

let firstCardClicked = null;
let secondCardClicked = null;
let clicks = 0;

function getAltId(imgClicked) {
  // **ADD** grab id of the div (parentElement)
  if(clicks === 0) {
    firstCardClicked = imgClicked.previousElementSibling.alt;
    clicks++;
  } else {
    secondCardClicked = imgClicked.previousElementSibling.alt;
    clicks++;
  }
}

function handleCardClick(event) {

  let imageClicked = event.target;
  console.dir(imageClicked);
  getAltId(imageClicked);
  console.log(firstCardClicked);
  console.log(secondCardClicked);
  // helper function to check if alt id matches

  // if(clicks === 2) {
  //   matchChecker(firstCardClicked, secondCardClicked);
  //   fristCardClicked = null
  //   secondCardClicked = null
  //   clicks = null
  // }

}

let cardFronts = document.getElementsByClassName('cardFront');

for(let i = 0; i < cardArray.length; i++) {
  cardFronts[i].src = cardArray[i].img;
  cardFronts[i].alt = cardArray[i].cardName;
}

// helper function
//  match checker     
//  Set variable to cardDiv1 and cardDiv2
// 
//  if secondClick === firstClick
//    cardDiv1.style.visibility = hidden ?? maybe
//    cardDiv2.style.visibility = hidden ??
//      hide div's of both images
//    
//  else { subtract from difficulty tally}


// variable for times clicked (2)
// helper function to determine which variable to put the alt id of the clicked image into
// helper function 


// *******************
// AUDREY PLEASEEEE HELP

// event handlers - need: image clicked to display card


// We need to contain two event clicks
// clickOne and clickTwo
// We need to compare them

// Maybe backup to render func?
// ********************

// local storage

