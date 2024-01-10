// Exercise 1 : HTML Form
// Instructions
// Hint : Read about sending form data using the HTTP protocol

// 1. Create a form like the one above. The form should contain three inputs:
// a small text input asking for a name,
// a larger textarea input to write a message,
// a submit input (“Send”)

// 2. When you click the Send button, the form will be submitted with a GET method. (you can use the same HTML file for the action url)

/* <form id="myform" action="exercise_xp.html" method="GET">
  <div>
    <label for="name">Name</label>
  </div>
  <div>
    <input type="text" name="name" value="John" name="name" />
  </div>
  <div>
    <label for="comments">Comments</label>
  </div>
  <div>
    <textarea id="comments" cols="20" rows="10" name="comments">
      My comments
    </textarea>
  </div>
  <input type="submit" value="Send" />
</form>; */

// 3. Where will the sent data appear?

// It will appear in the URL as parameter http://127.0.0.1:5500/week7/day2/exercise_xp.html?name=John&comments=My+comments

// Exercise 2 : HTML Form #2
// Instructions
// 1. Use the same form structure as Exercise 1.
// 2. When you click the Send button, the form will be submitted with a POST method.(you can use the same HTML file for the action url)

/* <form id="myform" action="exercise_xp.html" method="POST">
  <div>
    <label for="name">Name</label>
  </div>
  <div>
    <input type="text" name="name" value="John" name="name" />
  </div>
  <div>
    <label for="comments">Comments</label>
  </div>
  <div>
    <textarea id="comments" cols="20" rows="10" name="comments">
      My comments
    </textarea>
  </div>
  <input type="submit" value="Send" />
</form>; */

// 3. Where will the sent data appear? Hint : Look at the Network Tab

// In the Network Tab Headers and Payload

// Exercise 3 : JSON Mario
// Instructions
// Using this code:

const marioGame = {
  detail: "An amazing game!",
  characters: {
    mario: {
      description: "Small and jumpy. Likes princesses.",
      height: 10,
      weight: 3,
      speed: 12,
    },
    bowser: {
      description: "Big and green, Hates princesses.",
      height: 16,
      weight: 6,
      speed: 4,
    },
    princessPeach: {
      description: "Beautiful princess.",
      height: 12,
      weight: 2,
      speed: 2,
    },
  },
};

// 1. Convert this JS object into a JSON object. What happens to the nested objects ?

const jasonString = JSON.stringify(marioGame);
console.log(jasonString);

// The nest objects stayed:
// {"detail":"An amazing game!","characters":{"mario":{"description":"Small and jumpy. Likes princesses.","height":10,"weight":3,"speed":12},"bowser":{"description":"Big and green, Hates princesses.","height":16,"weight":6,"speed":4},"princessPeach":{"description":"Beautiful princess.","height":12,"weight":2,"speed":2}}}

// 2. Convert and pretty print this JS object into a JSON object. Hint : Check out the JSON lesson on the platform.

const jasonStringPretty = JSON.stringify(marioGame, null, 2);
console.log(jasonStringPretty);

// 3. Use your web inspector to add a breakpoint. Check the values of the JSON object in the debugger.

// Go to inspect
// Then sourses
// Open folder
// Allow
// Open file
// Add breakpoint
// Debug
