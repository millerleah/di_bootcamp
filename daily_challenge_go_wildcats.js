// Instructions
// Using this array:

const gameInfo = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"],
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"],
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"],
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"],
  },
];

// 1. Create an array using forEach that contains all the usernames from the gameInfo array, add an exclamation point (ie. “!”) to the end of every username.
// The new array should look like this :
// const usernames = ["john!", "becky!", "susy!", "tyson!"]

const usernames = getUsernamesFromArray(gameInfo);
console.log(usernames);

function getUsernamesFromArray(users) {
  const usernames = [];
  for (const user of users) {
    usernames.push(user.username + "!");
  }
  return usernames;
}

// 2. Create an array using forEach that contains the usernames of all players with a score bigger than 5.
// The new array should look like this :

// const winners = ["becky", "susy"]

const usersWithScoreBiggerThan5 = getUsernamesAcordingToScore(gameInfo);
console.log(usersWithScoreBiggerThan5);

function getUsernamesAcordingToScore(users) {
  const HighScorer = [];
  for (const user of users) {
    if (user.score > 5) {
      HighScorer.push(user.username);
    }
  }
  return HighScorer;
}

// 3. Find and display the total score of the users. (Hint: The total score is 71)

const allScores = gettotalScore(gameInfo);
const totalScores = allScores.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
console.log(totalScores);

function gettotalScore(score) {
  const allScores = [];
  for (const s of score) {
    allScores.push(s.score);
  }
  return allScores;
}
