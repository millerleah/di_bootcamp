// Exercise 1 : Find The Numbers Divisible By 23
// Instructions
// Create a function call displayNumbersDivisible() that takes no parameter.

// In the function, loop through numbers 0 to 500.

// Console.log all the numbers divisible by 23.

// At the end, console.log the sum of all numbers that are divisible by 23.

// Outcome : 0 23 46 69 92 115 138 161 184 207 230 253 276 299 322 345
// 368 391 414 437 460 483
// Sum : 5313

// let array = [];

// function displayNumbersDivisible() {
//   for (let i = 0; i <= 500; i++) {
//     if (i % 23 === 0) {
//       array.push(i);
//     }
//   }
// }
// displayNumbersDivisible();
// console.log(array);
// let sum = array.reduce((acc, val) => acc + val);
// console.log(sum);

// 5. Bonus: Add a parameter divisor to the function.
// displayNumbersDivisible(divisor)

// let array = [];

// function displayNumbersDivisible(divisor) {
//   for (let i = 0; i <= 500; i++) {
//     if (i % divisor === 0) {
//       array.push(i);
//     }
//   }
// }
// displayNumbersDivisible(23);
// console.log(array);

// Example:
// displayNumbersDivisible(3) : Console.log all the numbers divisible by 3,
// and their sum
// displayNumbersDivisible(45) : Console.log all the numbers divisible by 45,
// and their sum

// Exercise 2 : Shopping List
// Instructions

// const stock = {
//   banana: 6,
//   apple: 0,
//   pear: 12,
//   orange: 32,
//   blueberry: 1,
// };

// const prices = {
//   banana: 4,
//   apple: 2,
//   pear: 1,
//   orange: 1.5,
//   blueberry: 10,
// };

// 1. Add the stock and prices objects to your js file.

//^ done

// 2. Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.

// let shoppingList = ["banana", "orange", "apple"];

// 3. Create a function called myBill() that takes no parameters.

// 4. The function should return the total price of your shoppingList. In order to do this you must follow these rules:
// 1. The item must be in stock. (Hint : check out if .. in)
// 2. If the item is in stock find out the price in the prices object.
// 5. Call the myBill() function.
// 6. Bonus: If the item is in stock, decrease the item’s stock by 1

// let totalCost = 0;

// function myBill() {
//   for (let i of shoppingList) {
//     if (i in stock && stock[i] > 0) {
//       console.log(`${i} is in stock`);
//       totalCost += prices[i];
//       stock[i] -= 1;
//     }
//     if (i in stock && stock[i] === 0) {
//       console.log(`${i} is not in stock`);
//     }
//   }
// }

// myBill();
// console.log(totalCost);
// console.log(stock);

// Exercise 3 : What’s In My Wallet ?
// Instructions
// Note: Read the illustration (point 4), while reading the instructions

// 1. Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments :
// - an item price
// - and an array representing the amount of change in your pocket.

// 2. In the function, determine whether or not you can afford the item.
// - If the sum of the change is bigger or equal than the item’s price (ie. it means that you can afford the item), the function should return true
// - If the sum of the change is smaller than the item’s price (ie. it means that you cannot afford the item) the function should return false

// 3. Change will always be represented in the following order: quarters, dimes, nickels, pennies.
// A quarters is 0.25
// A dimes is 0.10
// A nickel is 0.05
// A penny is 0.01

// 4. To illustrate:

// After you created the function, invoke it like this:

// changeEnough(4.25, [25, 20, 5, 0])
// The value 4.25 represents the item’s price
// The array [25, 20, 5, 0] represents 25 quarters, 20 dimes, 5 nickels and 0 pennies.
// The function should return true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50 which is bigger than 4.25 (the total amount due)

// Examples
// changeEnough(14.11, [2,100,0,0]) => returns false
// changeEnough(0.75, [0,0,20,5]) => returns true

// function changeEnough(itemPrice, amountOfChange) {
//   let change = [0.25, 0.1, 0.05, 0.01];
//   let new_amount = [];

//   for (let i = 0; i < change.length; i++) {
//     new_amount.push(change[i] * amountOfChange[i]);
//   }

//   let sum = new_amount.reduce((acc, val) => acc + val);

//   if (sum >= itemPrice) {
//     return true;
//   } else {
//     return false;
//     1``;
//   }
// }
// console.log(changeEnough(4.25, [25, 20, 5, 0]));
// console.log(changeEnough(14.11, [2, 100, 0, 0]));
// console.log(changeEnough(0.75, [0, 0, 20, 5]));

// Exercise 4 : Vacations Costs
// Instructions
// Let’s create functions that calculate your vacation’s costs:

// 1. Define a function called hotelCost().
// - It should ask the user for the number of nights they would like to stay in the hotel.
// - If the user doesn’t answer or if the answer is not a number, ask again.
// - The hotel costs $140 per night. The function should return the total price of the hotel.

// function hotelCost() {
//   let userInput = prompt("How many night(s) would you like to stay?");
//   userInput = Number(userInput);
//   while (isNaN(userInput)) {
//     userInput = prompt("How many night(s) would you like to stay?");
//   }
//   return `The total cost for the hotel stay will be $${userInput * 140}.`;
// }

// console.log(hotelCost());

// 2. Define a function called planeRideCost().
// - It should ask the user for their destination.
// - If the user doesn’t answer or if the answer is not a string, ask again.
// - The function should return a different price depending on the location.
// “London”: 183$
// “Paris” : 220$
// All other destination : 300$

// function planeRideCost() {
//   let input = prompt("Where would you like to fly?");
//   while (!isNaN(input)) {
//     input = prompt("Where would you like to fly?");
//   }
//   if (input.toLowerCase() === "london") {
//     return "Your total for the flight will cost $183.";
//   }
//   if (input.toLowerCase() === "paris") {
//     return "Your total for the flight will cost $220.";
//   } else {
//     return "Your total for the flight will cost $300.";
//   }
// }

// console.log(planeRideCost());

// 3. Define a function called rentalCarCost().
// - It should ask the user for the number of days they would like to rent the car.
// - If the user doesn’t answer or if the answer is not a number, ask again.
// - Calculate the cost to rent the car. The car costs $40 everyday.
//    - If the user rents a car for more than 10 days, they get a 5% discount.
//-  The function should return the total price of the car rental.

// function rentalCarCost() {
//   let userInput = prompt("How many day(s) would you like to rent the car?");
//   userInput = Number(userInput);
//   while (isNaN(userInput)) {
//     userInput = prompt("How many day(s) would you like to rent the car?");
//   }
//   if (userInput <= 10)
//     return `The total cost for the car rental will be $${userInput * 40}.`;
//   else {
//     return `The total cost for the car rental will be $${
//       userInput * 40 * 0.95
//     }.`;
//   }
// }

// console.log(rentalCarCost());

// 4. Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
// Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
// Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost().

// 5. Call the function totalVacationCost()

// function totalVacationCost() {
//   let hotelCost = hotelCost();
//   let planeRideCost = planeRideCost();
//   let rentalCarCost = rentalCarCost();
//   let totalCost = hotelCost + planeRideCost + rentalCarCost;
//   return `${totalCost} `;
// }
// console.log(totalVacationCost());

// 6. Bonus: Instead of using a prompt inside the 3 first functions, only use a prompt inside the totalVacationCost() function. You need to change the 3 first functions, accordingly.

// Exercise 5 : Users
// Instructions
// Create a new structured HTML file and a new Javascript file

// <div id="container">Users:</div>
// <ul class="list">
//     <li>John</li>
//     <li>Pete</li>
// </ul>
// <ul class="list">
//     <li>David</li>
//     <li>Sarah</li>
//     <li>Dan</li>
// </ul>

// 1. Add the code above, to your HTML file

// Done

// 2. Using Javascript:
// a. Retrieve the div and console.log it

// let div = document.querySelector("#container");
// console.log(div);

// b. Change the name “Pete” to “Richard”.

// let richard = (document.querySelectorAll(".list")[0].children[1].textContent =
//   "Richard");

// c. Delete the second <li> of the second <ul>.

// const sarah = document.querySelectorAll(".list")[1].children[1].remove();
// d. Change the name of the first <li> of each <ul> to your name. (Hint : use a loop)

// let ul = document.getElementsByClassName("list");
// for (let i = 0; i < ul.length; i++) {
//   ul[i].firstElementChild.textContent = "Leah";
// }

// 3. Using Javascript:
// a. Add a class called student_list to both of the <ul>'s.

// let ul1 = document.getElementsByClassName("list");
// for (let i = 0; i < ul1.length; i++) {
//   ul1[i].classList.add("student_list");
// }

// console.log(ul1);

// b. Add the classes university and attendance to the first <ul>.

// let firstLi = document.getElementsByClassName("list")[0];
// firstLi.classList.add("university", "attendance");
// console.log(firstLi);

// 4. Using Javascript:
// a. Add a “light blue” background color and some padding to the <div>.

// div = document.querySelector("#container");
// div.style.backgroundColor = "lightblue";

// b. Do not display the <li> that contains the text node “Dan”. (the last <li> of the first <ul>)

// const dan = (document.querySelectorAll(".list")[1].children[2].style.display = "none");

// c. Add a border to the <li> that contains the text node “Richard”. (the second <li> of the <ul>)

// richard = document.querySelectorAll(".list")[0].children[1].style.border =
//   "dotted 10px blue";

// d. Change the font size of the whole body.

// const body = (document.querySelector("body").style.fontSize = "20px");

// 5. Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).

// if ((div.style.backgroundColor = "lightblue")) {
//   alert("Hello x and y");
// }

// Exercise 6 : Change The Navbar
// Instructions
// Create a new structured HTML file and a new Javascript file

// <div id="navBar">
//     <ul>
//         <li><a href="#">Profile</a></li>
//         <li><a href="#">Home</a></li>
//         <li><a href="#">My Friends</a></li>
//         <li><a href="#">Messenger</a></li>
//         <li><a href="#">My Pics</a></li>
//     </ul>
// </div>

// 1. Add the code above, to your HTML file

// Done

// 2. Using Javascript, in the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.

// let div1 = document.querySelector("#navBar");
// div1.setAttribute("id", "socialNetworkNavigation");
// console.log(div1);

// 3. We are going to add a new <li> to the <ul>.
// a. First, create a new <li> tag (use the createElement method).

// const li = document.createElement("li");

// b. Create a new text node with “Logout” as its specified text.

// const text = document.createTextNode("Logout");

// c. Append the text node to the newly created list node (<li>).

// li.append(text);

// d. Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.

// const ul3 = document.getElementsByTagName("ul")[2];
// ul3.appendChild(li);
// console.log(ul3);

// 4. Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements from their parent element (<ul>). Display the text of each link. (Hint: use the textContent property).

// console.log(ul3.firstElementChild.textContent);
// console.log(ul3.lastElementChild.textContent);

// Exercise 7 : My Book List
// Instructions
// Take a look at this link for help.

// The point of this challenge is to display a list of two books on your browser.

// 1. In the body of the HTML page, create an empty section:
// <section class="listBooks"></section>

// 2. In the js file, create an array called allBooks. This is an array of objects. Each object is a book that has 4 keys (ie. 4 properties) :
// title,
// author,
// image : a url,
// alreadyRead : which is a boolean (true or false).

// 3. Initiate the array with 2 books of your choice (ie. Add manually 2 books objects in the array)

// const allBooks = [
//   {
//     title: "The Hunger Games",
//     author: "Suzanne Collins",
//     img: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61I24wOsn8L._AC_UF1000,1000_QL80_.jpg",
//     alreadyRead: false,
//   },
//   {
//     title: "Catching Fire",
//     author: "Suzanne Collins",
//     img: "https://upload.wikimedia.org/wikipedia/en/a/a2/Catching_Fire_%28Suzanne_Collins_novel_-_cover_art%29.jpg",
//     alreadyRead: true,
//   },
// ];

// 4. Requirements : All the instructions below need to be coded in the js file:
// Using the DOM, render each book inside a div (the div must be added to the <section> created in part 1).
// For each book :
// You have to display the book’s title and the book’s author.
// Example: HarryPotter written by JKRolling.
// The width of the image has to be set to 100px.
// If the book is already read. Set the color of the book’s details to red.

// const Section = document.querySelector(".listBooks");

// for (let book of allBooks) {
//   const div = document.createElement("div");
//   const h2 = document.createElement("h2");
//   const h3 = document.createElement("h3");
//   const img = document.createElement("img");
//   h2.innerText = book.title;
//   h3.innerText = book.author;
//   img.setAttribute("src", book.img);
//   img.style.width = "100px";
//   div.append(h2, h3, img);
//   Section.append(div);
//   if (book.alreadyRead) {
//     h2.style.color = "red";
//     h3.style.color = "red";
//   }
// }
