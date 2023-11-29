// Progression 1 - create a Coach array and return it
let coachName = "Alex Ferguson";
let coachAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

// Write your function here
function createCoach(name, age, team, trophies) {
  var coachArray = [name, age, team, trophies];
  return coachArray;
}

// Don't edit the following code
try {
  var coach = createCoach(coachName, coachAge, currentTeam, trophiesWon);
} catch (e) {
  // do nothing - expected error
}

// Progression 2 - create a formation object and return it
var formationArray = [4, 4, 3];

// write your function here
function createFormation(formation) {
  if (formation.length === 0) {
    return null;
  }
  var play = {
    defender: formation[0],
    midfield: formation[1],
    forward: formation[2],
  };
  return play;
}

// Don't edit the following code
try {
  var formationObject = createFormation(formationArray);
} catch (e) {
  // do nothing
}

// Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year) {
  var data = players.filter((player) => player.debut === year);
  return data;
}

// Progression 4 - Filter players that play at the position _______
function filterByPosition(position) {
  var data = players.filter((player) => player.position === position);
  return data;
}

// Progression 5 - Filter players that have won ______ award
function filterByAward(awardName) {
  let filteredArray = [];
  for (let i = 0; i < players.length; i++) {
    for (let j = 0; j < players[i].awards.length; j++) {
      if (players[i].awards[j].name === awardName) {
        filteredArray.push(players[i]);
      }
    }
  }
  return filteredArray;
}

// Progression 6 - Filter players that won ______ award ____ times
function filterByAwardXTimes(awardName, noOfTimes) {
  let filteredArray = [];
  let count = 0;
  let j;
  for (let i = 0; i < players.length; i++) {
    for (j = 0; j < players[i].awards.length; j++) {
      if (players[i].awards[j].name === awardName) {
        count++;
      }
    }
    if (count === noOfTimes) {
      filteredArray.push(players[i]);
    }
    count = 0;
  }
  return filteredArray;
}

// Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardXCountry(awardName, country) {
  var awardsData = filterByAward(awardName);
  var filteredData = awardsData.filter((player) => player.country === country);
  return filteredData;
}

// Progression 8 - Filter players that won at least ______ awards, belong to ______ team and are younger than ____
function filterByAwardxTeamxAge(noOfAwards, team, age) {
  var filteredData = players.filter(
    (player) =>
      player.age < age && player.team === team && player.awards.length >= noOfAwards
  );
  return filteredData;
}

// Progression 9 - Sort players in descending order of their age
function sortByAge() {
  for (let i = 0; i < players.length; i++) {
    for (let j = i + 1; j < players.length; j++) {
      if (players[i].age < players[j].age) {
        let temp = players[i];
        players[i] = players[j];
        players[j] = temp;
      }
    }
  }
}

// Progression 10 - Sort players belonging to _____ team in descending order of awards won
function filterByTeamxSortByNoOfAwards(team) {
  let count = 0;
  let filteredPlayers = [];
  for (let i = 0; i < players.length; i++) {
    if (players[i].team === team) {
      filteredPlayers[count++] = players[i];
    }
  }
  for (let i = 0; i < filteredPlayers.length; i++) {
    for (let j = i + 1; j < filteredPlayers.length; j++) {
      if (filteredPlayers[i].awards.length < filteredPlayers[j].awards.length) {
        let temp = filteredPlayers[i];
        filteredPlayers[i] = filteredPlayers[j];
        filteredPlayers[j] = temp;
      }
    }
  }
  return filteredPlayers;
}

// Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names
function compare(a, b) {
  let value = 0;
  if (a.name > b.name) {
    value = 1;
  } else if (a.name < b.name) {
    value = -1;
  } else {
    value = 0;
  }
}

function sortByNameXTimesXAwardXCountry(awardName, noOfTimes, country) {
  var dataOne = filterByAwardXTimes(awardName, noOfTimes);
  var dataTwo = dataOne.filter((player) => player.country === country);
  return dataTwo.sort(compare);
}

// Challenge 2 - Sort players that are older than _____ years in alphabetical order
// Sort the awards won by them in reverse chronological order
function sortByNameXOlderThan(age) {
  var data = players.filter((player) => player.age > age);
  return data;
}
