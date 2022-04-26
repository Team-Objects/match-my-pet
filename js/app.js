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
let easyRounds = 15;
let mediumRounds = 10;
let hardRounds = 7;

let cardArray = [];

// constructor functions

function User(name, difficulty){
  this.name = name;
  this.difficulty = difficulty;
  this.gamesWon = 0;
}

function Cards(name, fileExstention = 'png'){
  this.name = name;
  this.img = `assets/${name}.${fileExstention}`;

  cardArray.push(this);
}

// instantiating cards

// randomize photos

// event handlers - need: image clicked to display card, 


// local storage

