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




// event handlers - need: image clicked to display card


// local storage

