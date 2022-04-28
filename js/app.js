'use strict';

// DOM references

const cardArray = [];
let userArray = [];

let newUserData = null;

let difficultySelected = document.getElementById('userDifficulty');

// creates an array that holds the html tags with a class of card
// this grabs the individual div's that contain a front and back card
let gameCards = document.getElementsByClassName('card');
console.log(gameCards);
// creates an array that holds the html tags with a class of cardFront
// this grabs the individual img tags so that we can populate them 
let cardFronts = document.getElementsByClassName('cardFront');

// creating new variables for our getCardInfo() function which are also used in our matchChecker() function
// firstCardClicked and secondCardClicked will be assigned in the getCardInfo() function and overwritten in the handleCardClick() function
let firstCardClicked = null;
let secondCardClicked = null;
// clicks will be added to throughout the getCardInfo() function
let clicks = 0;
// firstClickParent and secondClickParent are assigned in the getCardInfo() function
// this grabs the parent element of cards (the div) so that if the two cards do match we can make them disappear
let firstClickParent = null;
let secondClickParent = null;

let retrievedUser = localStorage.getItem('user');

let parsedUser = JSON.parse(retrievedUser);

// constructor functions

function User(userName) {
  this.userName = userName;
  // this.difficulty = difficulty;
  this.gamesWon = 0;
  this.gamesPlayed = 0;

  userArray.push(this);
}

function Cards(cardName, fileExstention = 'png') {
  this.cardName = cardName;
  this.img = `assets/${cardName}.${fileExstention}`;

  cardArray.push(this);
}


// if (retrievedUser) {
//   newUserData = parsedUser;
// }

// if(retrievedUser) {
//   newUserData = parsedUser;
// } 


// instantiating cards

new Cards('greg-sleep', 'jpeg');
new Cards('greg-sleep', 'jpeg');
new Cards('mochi', 'jpg');
new Cards('mochi', 'jpg');
new Cards('Irish-Sitting');
new Cards('Irish-Sitting');
new Cards('bentley');
new Cards('bentley');
new Cards('tippy');
new Cards('tippy');
new Cards('harold');
new Cards('harold');

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

let showUsGame = document.getElementById('cardboxes');
showUsGame.style.visibility = 'hidden';

const formElem = document.getElementById('user-input-form');
formElem.addEventListener('submit', function (event) {
  event.preventDefault();
  let userName = event.target.userName.value;

  difficultySelected = parseInt(event.target.difficulty.value);
  console.log(userName);
  if (retrievedUser) {
    userArray = parsedUser;
    for (let i = 0; i < parsedUser.length; i++) {
      if (userName === parsedUser[i].userName) {
        newUserData = parsedUser[i];
        console.log(parsedUser[i]);
        // newUserData.difficulty = difficulty;
      } else if (i === parsedUser.length-1){
        newUserData = new User(userName);
      }
    }
  } else {
    newUserData = new User(userName);
  }
  showUsGame.style.visibility = 'visible';

});


// for loop that adds an event listener to each item in the gameCards array
// this refers to each card div that contains a front and back card
for (let i = 0; i < gameCards.length; i++) {
  gameCards[i].addEventListener('click', handleCardClick);
}

// for loop that adds a src and alt id to each item in cardFronts
// this refers to each img tag that contains a cardFront 
for (let i = 0; i < cardArray.length; i++) {
  cardFronts[i].src = cardArray[i].img;
  cardFronts[i].alt = cardArray[i].cardName;
}
let firstParent = null;
let secondParent = null;

// this is a helper function which will be called inside our event listener
// it will check what the value of the clicks variable is and give our globally scoped variables new values
function getClickInfo(imgClicked) {
  // imgClicked is a placeholder for whatever data we push when we call this function
  if (clicks === 0) {
    // firstCardClicked is assigned the previousElementSibling.alt of the cardBack img
    // previousElementSibling.alt will give us the alt id of the pet image (mochi) so that we can use this in our matchChecker
    // previousElementSibling is needed because imgClicked is refering to the cardBack img
    imgClicked.parentElement.classList.add('flip');
    firstParent = imgClicked.parentElement;
    firstCardClicked = imgClicked.previousElementSibling.alt;
    // firstClickParent is assigned the parentElement.id
    // this means it is assigned the id of the parent div (row1card1... ect)
    firstClickParent = imgClicked.parentElement.id;
    clicks++;
  } else {
    // repeats above but for second card
    imgClicked.parentElement.classList.add('flip');
    secondParent = imgClicked.parentElement;
    secondCardClicked = imgClicked.previousElementSibling.alt;
    secondClickParent = imgClicked.parentElement.id;
    clicks++;
  }
}

//event Listener
function handleCardClick(event) {
  // this assignes imageClicked the html tag we click on (cardBack)
  let imageClicked = event.target;
  console.dir(imageClicked);
  console.log(imageClicked);
  // calls our helper method getCardInfo() and passes our click data as a parameter
  // this is where we can refer to getCardInfo() for explanation
  getClickInfo(imageClicked);
  console.log(firstCardClicked);
  console.log(secondCardClicked);

  // helper function to check if alt id matches
  if (clicks === 2) {
    // if we have selected 2 images, call another helper function
    matchChecker();
    // reset all of these variables for the next 'round' of clicks
    firstCardClicked = null;
    secondCardClicked = null;
    clicks = 0;
  }

  // function flipCard() {
  //   console.log("THIS",this);
  //   this.classList.toggle('flip');
  // }

  // card.forEach(card => card.addEventListener('click', flipCard));


  if (difficultySelected === 0 || cardsLeftToMatch === 0) {
    for (let i = 0; i < gameCards.length; i++) {
      gameCards[i].removeEventListener('click', handleCardClick);
    }

    if (difficultySelected === 0) {
      newUserData.gamesPlayed++;
      endGame();


    } else if (cardsLeftToMatch === 0) {
      newUserData.gamesPlayed++;
      newUserData.gamesWon++;

      endGame();

    }
    let stringifiedProducts = JSON.stringify(userArray);

    localStorage.setItem('user', stringifiedProducts);
  }
}

// stretch: let correctMatch = 0;
let cardsLeftToMatch = 6;

// flip function into eventListener
// or add class name for flipped alt1


function matchChecker() {
  let cardDiv1 = document.getElementById(firstClickParent);
  let cardDiv2 = document.getElementById(secondClickParent);
  // credit due: https://stackoverflow.com/questions/25209834/trying-to-make-a-div-disappear-with-javascript
  if (firstCardClicked === secondCardClicked) {
    setTimeout(() => {
      cardDiv1.style.visibility = 'hidden';
      cardDiv2.style.visibility = 'hidden';
    }, 1100);
    cardsLeftToMatch = cardsLeftToMatch - 1;
    // stretch:    correctMatch++;
  } else {
    unFlip();
  }
  difficultySelected--;
}

function unFlip() {
  setTimeout(() => {
    firstParent.classList.remove('flip');
    secondParent.classList.remove('flip');
  }, 1100);
}



function endGame() {
  if (difficultySelected === 0 || cardsLeftToMatch === 0) {
    alert(`Game over ${newUserData.userName}!`);
    //https://developer.mozilla.org/en-US/docs/Web/API/Location/reload
    location.replace('leaderboard.html');
  }
}






// *******************
// AUDREY PLEASEEEE HELP
// ********************

// local storage

