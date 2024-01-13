// Exercise 1 : Comparison
// Instructions
// 1. Create a function called compareToTen(num) that takes a number as an argument.
// 2. The function should return a Promise:
// the promise resolves if the argument is less than or equal to 10
// the promise rejects if argument is greater than 10.

// function compareToTen(num) {
//   return new Promise((res, rej) => {
//     if (num <= 10) {
//       res("Number is good");
//     } else {
//       rej("Try again");
//     }
//   });
// }

// Test:
// //In the example, the promise should reject
// compareToTen(15)
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// //In the example, the promise should resolve
// compareToTen(8)
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// Exercise 2 : Promises
// Instructions
// 1. Create a promise that resolves itself in 4 seconds and returns a “success” string.

// const promise = new Promise((res, rej) => {
//   setTimeout(res, 4000, "Success!");
// });

// console.log(promise);

// Exercise 3 : Resolve & Reject
// Instructions
// 1. Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.

// const promise1 = Promise.resolve(3);
// promise1.then((res) => console.log(res)).catch((err) => console.error(err));

// 2. Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”

// const promise2 = Promise.reject("Boo");
// promise2.then((res) => console.log(res)).catch((err) => console.error(err));
