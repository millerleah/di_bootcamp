// Exercise 1 : Scope
// Instructions
// 1. Analyse the code below, and predict what will be the value of a in all the following functions.
// 2. Write your prediction as comments in a js file. Explain your predictions.

// #1
// function funcOne() {
//   let a = 5;
//   if (a > 1) {
//     a = 3;
//   }
//   alert(`inside the funcOne function ${a}`);
// }

// #1.1 - run in the console:
// funcOne();
// #1.2 What will happen if the variable is declared
// with const instead of let ?

// Prediction:
// An alert will pop up that "inside the funcOne function 3".
// if it is change to const there will be an error since youu can't redefie a const.

//#2
// let a = 0;
// function funcTwo() {
//   a = 5;
// }

// function funcThree() {
//   alert(`inside the funcThree function ${a}`);
// }

// // #2.1 - run in the console:
// funcThree();
// funcTwo();
// funcThree();
// #2.2 What will happen if the variable is declared
// with const instead of let ?

// Prediction:
// first funcThree() runs and a = 0 so a alert will pop up saying "inside the funcThree function 0" then funcTwo() runs and  a = 5 last and alreat will pop up by running funcThree() and will say "inside the funcThree function 5" since funcTwo() change it to a = 5.
// if it is change to const funcThree() will run and an alert will pop up saying "inside the funcThree function 0" then there will be an error since youu can't redefie a const and inside funcTwo() it trys to.

//#3
// function funcFour() {
//   window.a = "hello";
// }

// function funcFive() {
//   alert(`inside the funcFive function ${a}`);
// }

// #3.1 - run in the console:
// funcFour();
// funcFive();

// Prediction:
//An alert will pop up from funcFive() saying "inside the funcFive function hello".

//#4
// let a = 1;
// function funcSix() {
//   let a = "test";
//   alert(`inside the funcSix function ${a}`);
// }

// #4.1 - run in the console:
// funcSix();
// #4.2 What will happen if the variable is declared
// with const instead of let ?

// Prediction:
// The alert won't get to pop up because it trys to redefine before which it can't. Instead there will be an error.

//#5
// let a = 2;
// if (true) {
//   let a = 5;
//   alert(`in the if block ${a}`);
// }
// alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console
// #5.2 What will happen if the variable is declared
// with const instead of let ?

// Prediction:
// If statement will run and alert will pop up saying "in the if block 5" Then the outer(global) alert will pop up saying "outside of the if block 2" it doesn't say 5 because a = 5 is only in the if statement (local)

// Exercise 2 : Ternary Operator
// Instructions
// Using the code below:

// function winBattle() {
//   return true;
// }

// 1. Transform the winBattle() function to an arrow function.

// const winBattle = () => {
//   return true;
// };

// 2. Create a variable called experiencePoints.

// 3. Assign to this variable, a ternary operator. If winBattle() is true, the experiencePoints variable should be equal to 10, else the variable should be equal to 1.

// const experiencePoints = (i) => {
//   return i ? "10" : "1";
// };

// 4. Console.log the experiencePoints variable.

// console.log(experiencePoints(winBattle()));

// Exercise 3 : Is It A String ?
// Instructions
// 1. Write a JavaScript arrow function that checks whether the value of the argument passed, is a string or not. The function should return true or false
// Check out the example below to see the expected output

// Example:
// console.log(isString('hello'));
// //true
// console.log(isString([1, 2, 4, 0]));
// //false

// const isString = (arg) => (typeof arg === "string" ? true : false);
// console.log(isString("hello"));
// console.log(isString([1, 2, 4, 0]));

// Exercise 4 : Find The Sum
// Instructions
// 1. Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.

// const addSum = (x, y) => x + y;

// console.log(addSum(5, 7));

// Exercise 5 : Kg And Grams
// Instructions
// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

// 1. First, use function declaration and invoke it.
// function convertKiloToGrams(num) {
//   return num * 1000;
// }
// console.log(`${convertKiloToGrams(5)}gr`);

// 2. Then, use function expression and invoke it.

// const convertKiloToGrams = function (num) {
//   return num * 1000;
// };
// console.log(`${convertKiloToGrams(5)}gr`);

// 3. Write in a one line comment, the difference between function declaration and function expression.

// In a function declaration the function has a name while in a function expression the function is anonymous and will not get hoisted, but you can use it in a callback or put it inside a variable.

// 4. Finally, use a one line arrow function and invoke it.

// const convertKiloToGrams = (num) => num * 1000;
// console.log(`${convertKiloToGrams(5)}gr`);

// Exercise 6 : Fortune Teller
// Instructions
// 1. Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
// 2. The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."

// (function selfInvokingFunction(numChildren, partner, location, job) {
//   const sentance = `You will be a ${job} in ${location}, and married to ${partner} with ${numChildren} kids.`;
//   console.log(sentance);
//   const p = document.createElement("p");
//   p.innerText = sentance;
//   document.body.appendChild(p);
// })(2, "Chaim", "Israel", "Developer");

// Exercise 7 : Welcome
// Instructions
// John has just signed in to your website and you want to welcome him.

// 1. Create a Navbar in your HTML file.
// 2. In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
// 3. The function should add a div in the nabvar, displaying the name of the user and his profile picture.

// (function loggedIn(userName) {
//   const navBar = document.querySelector(".navbar");
//   const div = createElement("div");
//   div.innerText = userName;
//   const image = document.createElement("img")
//   image.src = "https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg"
//   navBar.appendChild(div);
//   navBar.appendChild(image)
// })("Leah");

// Exercise 8 : Juice Bar
// Instructions
// You will use nested functions, to open a new juice bar.

// Part I:
// 1. The outer function named makeJuice receives 1 argument: the size of the beverage the client wants - small, medium or large.

// 2. The inner function named addIngredients receives 3 ingredients, and displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

// 3. Invoke the inner function ONCE inside the outer function. Then invoke the outer function in the global scope.

// function makeJuice(size) {
//   function addIngredients(ingredient1, ingredient2, ingredient3) {
//     const sentance = `The client wants a ${size} juice, containing ${ingredient1}, ${ingredient2} and ${ingredient3}`;
//     console.log(sentance);
//     const p = document.createElement("p");
//     p.innerText = sentance;
//     document.body.appendChild(p);
//   }
//   addIngredients("Banana", "Strawberries", "Kiwi");
// }

// makeJuice("Large");

// Part II:
// 1. In the makeJuice function, create an empty array named ingredients.

// 2. The addIngredients function should now receive 3 ingredients, and push them into the ingredients array.

// 3. Create a new inner function named displayJuice that displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

// 4. The client wants 6 ingredients in his juice, therefore, invoke the addIngredients function TWICE. Then invoke once the displayJuice function. Finally, invoke the makeJuice function in the global scope.

// function makeJuice(size) {
//   let ingredients = [];
//   addIngredients("Banana", "Strawberries", "Kiwi");
//   addIngredients("Apple", "Mango", "Blueberries");
//   displayJuice(ingredients);
//   function addIngredients(ingredient1, ingredient2, ingredient3) {
//     ingredients.push(ingredient1, ingredient2, ingredient3);
//   }

//   function displayJuice(ingredients) {
//     const firstPart = `The client wants a ${size} juice, containing `;
//     let secondPart = " ";
//     ingredients.forEach((i) => (secondPart += i + " "));
//     const sentance = firstPart + secondPart;
//     const p = document.createElement("p");
//     p.innerText = sentance;
//     document.body.appendChild(p);
//   }
// }

// makeJuice("Large");
