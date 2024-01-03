// Instructions
// In todays exercise we will be creating a Mad Libs game.
// If you’ve never played this game, a mad lib is a game where you fill in a bunch of blank inputs with different word types (ie : noun, adjective, verb), and then a story is generated based on the words you chose, and sometimes the story is surprisingly funny.

// In this exercise you work with the HTML code presented below.

// <!DOCTYPE html>
// <html>
//  <head>
//   <meta charset="utf-8" />
//   <title>Challenge: Mad Libs</title>
//  </head>
//  <body>

//     <h1>Mad Libs</h1>

//     <form id="libform">
//         <label for="noun">Noun:</label><input type="text" id="noun"><br>
//         <label for="adjective">Adjective:</label><input type="text" id="adjective"><br>
//         <label for="person">Someone's Name:</label><input type="text" id="person"><br>
//         <label for="verb">Verb:</label><input type="text" id="verb"><br>
//         <label for="place">A place:</label><input type="text" id="place"><br>
//         <button id="lib-button">Lib it!</button>
//     </form>

//     <p>Generated story:
//     <span id="story"></span>
//     </p>

//     <script src="..."></script>

//  </body>
// </html>

// Follow these steps :

// 1. Get the value of each of the inputs in the HTML file when the form is submitted. Remember the event.preventDefault()
// 2. Make sure the values are not empty
// 3. Write a story that uses each of the values.
// 4. Make sure you check the console for errors when playing the game.

let form = document.querySelector("#libform");

function getButton() {
  return document.getElementById("lib-button");
}

function click(e) {
  e.preventDefault();
  const noun = document.getElementById("noun").value;
  const adjective = document.getElementById("adjective").value;
  const person = document.getElementById("person").value;
  const verb = document.getElementById("verb").value;
  const place = document.getElementById("place").value;

  if (
    noun == "" ||
    adjective == "" ||
    person == "" ||
    verb == "" ||
    place == ""
  )
    return;

  const story = writeStory(noun, adjective, person, verb, place);
  console.log(story);

  const append = appendStory(story);
}

function appendStory(story) {
  const text = document.getElementById("story");
  const span = document.createElement("span");
  span.innerText = story;
  text?.appendChild(span);
}

function writeStory(noun, adjective, person, verb, place) {
  return `I took on my hike a ${noun}. I saw a very ${adjective} bird. My friend ${person} joined me in the middle. I ${verb} by the water. The hike ended up by ${place}. `;
}

const button = getButton();
button?.addEventListener("click", click);

// 5. Bonus: Add a “shuffle” button to the HTML file, when clicked the button should change the story currently displayed (but keep the values entered by the user). The user could click the button at least three times and get a new story. Display the stories randomly.

// I startted to do it and the stopped, but I saved this code just in case I want to do in later
// For bonus:
// function writeStory2(noun, adjective, person, verb, place) {
//     return `${noun} are fun. We are ${adjective}. ${person} is wearing stripped pants. I ${verb} after I go to ${place}.`
//   }

//   function writeStory3(noun, adjective, person, verb, place) {
//     return `I like to ${noun}. My friends are ${adjective}. My best friend is ${person}. I like to ${verb} when I go to ${place}.`;
//   }

// function shuffleStory(noun, adjective, person, verb, place){
// }
