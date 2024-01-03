// Exercise 1 : Change The Article
// Instructions
// Copy the code below, into a structured HTML file:

// <article>
//     <h1> Some Facts </h1>
//     <h2> The Chocolate </h2>
//     <h3> History of the chocolate </h3>
//     <p> Chocolate is made from tropical Theobroma cacao tree seeds.
//     Its earliest use dates back to the Olmec civilization in Mesoamerica.</p>
//     <p> After the European discovery of the Americas, chocolate became
//     very popular in the wider world, and its demand exploded. </p>
//     <p> Chocolate has since become a popular food product that millions enjoy every day,
//     thanks to its unique, rich, and sweet taste.</p>
//     <p> But what effect does eating chocolate have on our health?</p>
// </article>

// 1. Using a DOM property, retrieve the h2 and console.log it.

// const h2 = document.querySelector("h2");
// console.log(h2);

// 2. Using DOM methods, remove the last paragraph in the <article> tag.

// const lastParagraph = document.getElementsByTagName("p")[3].remove();
// console.log(lastParagraph);

// 3. Add a event listener which will change the background color of the h3 to red, when it’s clicked on.
// const h3 = document.querySelector("h3");
// console.log(h3);

// h3.addEventListener("click", backgroundColor);

// function backgroundColor() {
//   h3.style.backgroundColor = "red";
// }

// 4. Add an event listener which will hide the h4 when it’s clicked on (use the display:none property).
// const h4 = document.querySelector("h4");
// console.log(h4);

// h4.addEventListener("click", hideOnClick);

// function hideOnClick() {
//   h4.style.display = "none";
// }

// 5. Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.

// const boldButton = document.querySelector("#bold");
// console.log(boldButton);

// boldButton.addEventListener("click", makeBold);

// function makeBold() {
//   document.getElementsByTagName("p")[0].style.fontWeight = "bold";
//   document.getElementsByTagName("p")[1].style.fontWeight = "bold";
//   document.getElementsByTagName("p")[2].style.fontWeight = "bold";
// }

// 6. BONUS : When you hover on the h2, set the font size to a random pixel size between 0 to 100.(Check out this documentation)

// 7. BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)

// Exercise 2 : Work With Forms
// Instructions
// Copy the code below, into a structured HTML file:

// <form>
//   <label for="fname">First name:</label><br>
//   <input type="text" id="fname" name="firstname"><br>
//   <label for="lname">Last name:</label><br>
//   <input type="text" id="lname" name="lastname"><br><br>
//   <input type="submit" value="Submit" id="submit">
// </form>
// <ul class="usersAnswer"></ul>

// 1. Retrieve the form and console.log it.

// const form = document.querySelector("form");
// console.log(form);

// 2. Retrieve the inputs by their id and console.log them.

// const fName = document.getElementById("fname");
// const lName = document.getElementById("lname");
// console.log(fName);
// console.log(lName);

// 3. Retrieve the inputs by their name attribute and console.log them.

// const firstName = document.querySelector("firstname");
// const lastName = document.querySelector("lastname");
// console.log(fName);
// console.log(lName);

// 4. When the user submits the form (ie. submit event listener)
// - use event.preventDefault(), why ?
// - get the values of the input tags,
// - make sure that they are not empty,
// - create an li per input value,
// - then append them to a the <ul class="usersAnswer"></ul>, below the form.

// The output should be :

// <ul class="usersAnswer">
//     <li>first name of the user</li>
//     <li>last name of the user</li>
// </ul>

// const submitButton = document.querySelector("#submit");
// console.log(submitButton);

// submitButton.addEventListener("click", submitForm);

// function submitForm(e) {
//   e.preventDefault();
//   const fName = document.getElementById("fname").value;
//   const lName = document.getElementById("lname").value;

//   if (fName == "" || lName == "") return;

//   const ul = document.querySelector(".usersAnswer");
//   const li1 = document.createElement("li1");
//   const li2 = document.createElement("li2");
//   li1.innerText = fName;
//   li2.innerText = lName;
//   ul.appendChild(li1);
//   ul.appendChild(li2);

//   console.log(li1);
//   console.log(li2);
// }

// Exercise 3 : Transform The Sentence
// Instructions
// Add this sentence to your HTML file then follow the steps :

// <p><strong>Hello</strong> I hope you are enjoying <strong>this</strong> class. At the
// <strong>end</strong> you <strong>will</strong> be great Developers!
// <strong>Enjoy</strong> the <strong>JavaScript </strong> lessons</p>

// In the JS file:

// 1. Declare a global variable named allBoldItems.

// let allBoldItems;

// 2. Create a function called getBoldItems() that takes no parameter. This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.

// function getBoldItems() {
//   allBoldItems = document.getElementsByTagName("strong");
// }
// getBoldItems();
// console.log(allBoldItems);

// 3. Create a function called highlight() that changes the color of all the bold text to blue.

// function highlight() {
//   getBoldItems();
//   for (const item of allBoldItems) {
//     item.style.color = "blue";
//   }
// }
// highlight();

// 4. Create a function called returnItemsToDefault() that changes the color of all the bold text back to black.

// function returnItemsToDefault() {
//   getBoldItems();
//   for (const item of allBoldItems) {
//     item.style.color = "black";
//   }
// }

// returnItemsToDefault();

// 5. Call the function highlight() on mouseover (ie. when the mouse pointer is moved onto the paragraph), and the function returnItemsToDefault() on mouseout (ie. when the mouse pointer is moved out of the paragraph). Look at this example

// const p = document.getElementsByTagName("p")[4];

// p.addEventListener("mouseover", highlight);
// p.addEventListener("mouseout", returnItemsToDefault);

// Exercice 4 : Volume Of A Sphere
// Instructions
// 1. Write a JavaScript program to calculate the volume of a sphere. Use the code below as a base:

// <!doctype html>
// <html lang="en">
//     <head>
//         <meta charset="utf-8">
//         <title>Volume of a Sphere</title>
//         <style>
//             body {
//                 padding-top:30px;
//             }

//             label,input {
//                 display:block;
//             }
//         </style>
//     </head>
//     <body>
// <p>Input radius value and get the volume of a sphere.</p>
// <form  id="MyForm">
//     <label for="radius">Radius</label><input type="text" name="radius" id="radius" required>
//     <label for="volume">Volume</label><input type="text" name="volume" id="volume">
//     <input type="submit" value="Calculate" id="submit">
// </form>
//     </body>
// </html>

// const calculateButton = document.querySelector("#submitcalculate");
// console.log(calculateButton);

// calculateButton.addEventListener("click", calculateSphere);

// function calculateSphere(e) {
//   e.preventDefault();
//   const r = Number(document.getElementById("radius").value);
//   const results = (4 / 3) * Math.PI * r ** 3;
//   const volume = document.getElementById("volume");
//   if (Number.isNaN(r)) return;
//   volume.value = results;
// }
