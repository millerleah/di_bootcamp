// Exercise 1: Timer
// Instructions
// Using this HTML code:

// <!DOCTYPE html>
//     <html>
//     <head>
//         <style>
//         p {
//           background: yellow;
//           color: red;
//         }
//         </style>
//     </head>
//     <body>
//         <div id="container"></div>
//         <button id="clear">Clear Interval</button>
//     </body>
//     </html>

// Part I
// 1. In your Javascript file, using setTimeout, call a function after 2 seconds.
// 2. The function will alert “Hello World”.

// function setTime() {
//   setTimeout(function () {
//     alert("Hello World");
//   }, 2000);
// }

// setTime();

// Part II
// 1. In your Javascript file, using setTimeout, call a function after 2 seconds.
// 2. The function will add a new paragraph <b>Hello World</b> to the <div id="container1">.

// let helloWorld = setTimeout(function () {
//   const div = document.querySelector("#container1");
//   const b = document.createElement("b");
//   const text = document.createTextNode("Hello World");
//   b.appendChild(text);
//   div.appendChild(b);
// }, 2000);

// Part III
// 1. In your Javascript file, using setInterval, call a function every 2 seconds.
// 2. The function will add a new paragraph <b>Hello World</b> to the <div id="container1">.
// 3. The interval will be cleared (ie. clearInterval), when the user will click on the button.

// const button = document.querySelector("#clear");
// button.addEventListener("click", stop);
// function stop() {
//   clearInterval(helloWorld);
//   alert("Stopped");
// }

// 4. Instead of clicking on the button, the interval will be cleared (ie. clearInterval) as soon as there will be 5 paragraphs inside the <div id="container1">.

// function fiveDivs() {
//     let b = document.querySelectorAll("b");
//     if (b.length >= 5) {
//       stopInt();
//     }
//   }

// Exercise 2 : Move The Box
// Instructions
// <!DOCTYPE html>
//     <html>
//     <head>
//         <style>
//         #container {
//           width: 400px;
//           height: 400px;
//           position: relative;
//           background: yellow;
//         }
//         #animate {
//           width: 50px;
//           height: 50px;
//           position: absolute;
//           background-color: red;
//         }
//         </style>
//     </head>
//     <body>
//         <p><button onclick="myMove()">Click Me</button></p>
//         <div id="container">
//           <div id="animate"></div>
//         </div>
//     </body>
//     </html>

// 1. Copy the code above, to a structured HTML file.

// Done

// 2. In your Javascript file, use setInterval to move the <div id="animate"> to the right side of the <div id="container">, when the button is clicked on.
// The <div id="animate"> should move 1px to the right every milisecond, until it reaches the end of the <div id="container">.
// Hint : use clearInterval as soon as the box reaches the right end side of the container
// Hint : check out the demonstration in the Course Noted named JS Functions

function myMove() {
  var elem = document.getElementById("animate");
  var pos = 0;
  let id = setInterval(function () {
    if (pos <= 350) {
      pos++;
      elem.style.left = pos + "px";
    } else {
      clearInterval(id);
    }
  }, 5);
}
