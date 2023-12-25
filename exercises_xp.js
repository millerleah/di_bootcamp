// Exercise 1 : List Of People
// Instructions
let people = ["Greg", "Mary", "Devon", "James"];

// Part I - Review About Arrays
// 1. Write code to remove “Greg” from the people array.

people.splice(0, 1);
console.log(people);

// 2. Write code to replace “James” to “Jason”.

let indexOfJames = people.indexOf("James");
people.splice(indexOfJames, 1, "Jason");
console.log(people);

// 3. Write code to add your name to the end of the people array.

people.push("Leah");
console.log(people);

// 4. Write code that console.logs Mary’s index. take a look at the indexOf method on Google.

let indexOfMary = people.indexOf("Mary");
console.log(indexOfMary);

// 5. Write code to make a copy of the people array using the slice method.
// The copy should NOT include “Mary” or your name.
// Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
// Hint: Check out the documentation for the slice method

let indexOfDevon = people.indexOf("Devon");
let indexOfJason = people.indexOf("Jason");
let indexOfLeah = people.indexOf("Leah");

let devonJames = people.slice(indexOfDevon, indexOfLeah);
console.log(devonJames);

// 6. Write code that gives the index of “Foo”. Why does it return -1 ?

let indexOfFoo = people.indexOf("Foo");
console.log(indexOfFoo);
console.log(people);
// -1 = didn't find in the array

// 7. Create a variable called last which value is the last element of the array.
// Hint: What is the relationship between the index of the last element in the array and the length of the array?

let last = people[people.length - 1];
console.log(last);

// Part II - Loops
// 1. Using a loop, iterate through the people array and console.log each person.

for (let x of people) {
  console.log(x);
}

// 2. Using a loop, iterate through the people array and exit the loop after you console.log “Devon” .
// Hint: take a look at the break statement in the lesson.

for (let x of people) {
  if (x === "Devon") {
    break;
  } else {
    console.log(x);
  }
}

// Exercise 2 : Your Favorite Colors
// Instructions
// 1. Create an array called colors where the value is a list of your five favorite colors.

let colors = ["Blue", "Orange", "Black", "Purple", "White"];

// 2.Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
for (let i = 0; i < colors.length; i++) {
  console.log(`My #${i + 1} choice is ${colors[i]}`);
}

// 3.Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
// Hint : create an array of suffixes to do the Bonus

let suffixes = ["st", "nd", "rd", "th", "th"];

for (let i = 0; i < colors.length; i++) {
  console.log(`My ${i + 1}${suffixes[i]} choice is ${colors[i]}`);
}

// Exercise 3 : Repeat The Question
// Instructions
// 1. Prompt the user for a number.
// Hint : Check the data type you receive from the prompt (ie. Use the typeof method)

let answer = prompt("Choose a number:");
let num = Number(answer);
console.log(num);

// 2. While the number is smaller than 10 continue asking the user for a new number.
// Tip : Which while loop is more relevant for this situation?

let number = null;

while (number < 10) {
  let input = prompt("Pick a number:");
  number = Number(input);
}
console.log(number);

// Exercise 4 : Building Management
// Instructions:
const building = {
  numberOfFloors: 4,
  numberOfAptByFloor: {
    firstFloor: 3,
    secondFloor: 4,
    thirdFloor: 9,
    fourthFloor: 2,
  },
  nameOfTenants: ["Sarah", "Dan", "David"],
  numberOfRoomsAndRent: {
    sarah: [3, 990],
    dan: [4, 1000],
    david: [1, 500],
  },
};

// Review About Objects
// 1. Copy and paste the above object to your Javascript file.

// ^

// 2. Console.log the number of floors in the building.

console.log(building.numberOfFloors);

// 3. Console.log how many apartments are on the floors 1 and 3.

console.log(building.numberOfAptByFloor.firstFloor);
console.log(building.numberOfAptByFloor.thirdFloor);

// 4. Console.log the name of the second tenant and the number of rooms he has in his apartment.

console.log(building.nameOfTenants[1]);
console.log(building.numberOfRoomsAndRent.dan[0]);

// 5. Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.

let sarahsRent = building.numberOfRoomsAndRent.sarah[1];
let davidsRent = building.numberOfRoomsAndRent.david[1];
let dansRent = building.numberOfRoomsAndRent.dan[1];

if (sarahsRent + davidsRent > dansRent) {
  building.numberOfRoomsAndRent.dan[1] = 1200;
}
console.log(building.numberOfRoomsAndRent.dan[1]);

// Exercise 5 : Family
// Instructions
// 1. Create an object called family with a few key value pairs.

let family = {
  dad: "Chaim",
  mom: "Leah",
  kid1: "Yehuda",
  kid2: "Yosef",
};

// 2. Using a for in loop, console.log the keys of the object.

for (let key in family) {
  console.log(key);
}

// 3. Using a for in loop, console.log the values of the object.

for (let key in family) {
  console.log(family[key]);
}

// Exercise 6 : Rudolf
// Instructions
const details = {
  my: "name",
  is: "Rudolf",
  the: "raindeer",
};

// 1. Given the object above and using a for loop, console.log “my name is Rudolf the raindeer”

let sentance = "";

for (let key in details) {
  sentance = sentance + key + " " + details[key] + " ";
}
console.log(sentance);

// Exercise 7 : Secret Group
// Instructions
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
// 1. A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
// Hint: a string is an array of letters

let societyName = "";

for (const n of names.sort()) {
  societyName = societyName + n[0];
}

// 2. Console.log the name of their secret society. The output should be “ABJKPS”

console.log(societyName);
