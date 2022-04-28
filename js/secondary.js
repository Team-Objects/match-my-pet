let retrievedUser = localStorage.getItem('user');

let parsedUser = JSON.parse(retrievedUser);

const parentElem = document.getElementById('leaderboard-table');

const article = document.createElement('article');
parentElem.appendChild(article);

// table
const tableElem = document.createElement('table');
// set attribute??
article.appendChild(tableElem);

const headerRow = document.createElement('tr');
tableElem.appendChild(headerRow);

const userHeaderCell = document.createElement('th');
headerRow.appendChild(userHeaderCell);
userHeaderCell.textContent = 'User';

const gamesPlayedHeaderCell = document.createElement('th');
headerRow.appendChild(gamesPlayedHeaderCell);
gamesPlayedHeaderCell.textContent = 'Games Played';

const gamesWonHeaderCell = document.createElement('th');
headerRow.appendChild(gamesWonHeaderCell);
gamesWonHeaderCell.textContent = 'Games Won';

function populateTable() {
  
  for(let i = 0; i < parsedUser.length; i++) {
    const dataRow = document.createElement('tr');
    tableElem.appendChild(dataRow);

    const userDataCell = document.createElement('td');
    dataRow.appendChild(userDataCell);
    userDataCell.textContent = parsedUser[i].userName;

    const gamesPlayedDataCell = document.createElement('td');
    dataRow.appendChild(gamesPlayedDataCell);
    gamesPlayedDataCell.textContent = parsedUser[i].gamesPlayed;

    const gamesWonDataCell = document.createElement('td');
    dataRow.appendChild(gamesWonDataCell);
    gamesWonDataCell.textContent = parsedUser[i].gamesWon;
  }
}

populateTable();