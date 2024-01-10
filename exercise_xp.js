// Exercise 1 : Location
// Instructions
// 1. Analyze the code below. What will be the output?
// const person = {
//   name: "John Doe",
//   age: 25,
//   location: {
//     country: "Canada",
//     city: "Vancouver",
//     coordinates: [49.2827, -123.1207],
//   },
// };

// const {
//   name,
//   location: {
//     country,
//     city,
//     coordinates: [lat, lng],
//   },
// } = person;

// console.log(
//   `I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`
// );

//Prediction:
// `I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)`
// the 2nd const is destructuring

// Exercise 2: Display Student Info
// Instructions
// function displayStudentInfo(objUser){
//     //destructuring
// }

// displayStudentInfo({first: 'Elie', last:'Schoppik'});

// 1. Using the code above, destructure the parameter inside the function and return a string as the example seen below:
// //output : 'Your full name is Elie Schoppik'

// function displayStudentInfo({ first, last }) {
//   console.log(`Your full name is ${first} ${last}`);
// }

// displayStudentInfo({ first: "Elie", last: "Schoppik" });

// Exercise 3: User & Id
// Instructions
// Using this object
// const users = { user1: 18273, user2: 92833, user3: 90315 };

// 1. Using methods taught in class, turn the users object into an array:
// Excepted output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
// FYI : The number is their ID number.

// entries = Object.entries(users);
// console.log(entries);

// 2. Modify the outcome of part 1, by multipling the user’s ID by 2.
// Excepted output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]

// multIdBy2 = [];
// for (const entrie of entries) {
//   multIdBy2.push([entrie[0], entrie[1] * 2]);
// }

// console.log(multIdBy2);

// Exercise 4 : Person Class
// Instructions
// 1. Analyze the code below. What will be the output?

// class Person {
//   constructor(name) {
//     this.name = name;
//   }
// }

// const member = new Person("John");
// console.log(typeof member);

//Prediction:
// object (everything is and object)
// Under the hood it is a class Person

// Exercise 5 : Dog Class
// Instructions
// Using the Dog class below:

// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
// };

// 1. Analyze the options below. Which constructor will successfully extend the Dog class?

// Answer:
// #2

//   // 1
// class Labrador extends Dog {
//   constructor(name, size) {
//     this.size = size;
//   }
// };

// Problem: Missing super

//   // 2
//   class Labrador extends Dog {
//     constructor(name, size) {
//       super(name);
//       this.size = size;
//     }
//   };

// Correct

//     // 3
//   class Labrador extends Dog {
//     constructor(size) {
//       super(name);
//       this.size = size;
//     }
//   };

// Problem: Missing name parm

//     // 4
//   class Labrador extends Dog {
//     constructor(name, size) {
//       this.name = name;
//       this.size = size;
//     }
//   };

// Problem: Missing super

// Exercise 6 : Challenges
// 1 Evaluate these (ie True or False)

// console.log([2] === [2]);
// console.log({} === {});

// Answer:
// Both false since object and arrays are compared by addresses in memory

// 2. What is, for each object below, the value of the property number and why?

// const object1 = { number: 5 };
// const object2 = object1;
// const object3 = object2;
// const object4 = { number: 5 };
// object1.number = 4;

// console.log(object1.number);
// Answer: 4
// console.log(object2.number);
// Answer: 4
// console.log(object3.number);
// Answer: 4
// console.log(object4.number);
// Answer: 5

// They all change with object1 because we didn't make a new object, but we are just pointing to the first object in memory by reference. Objects 1-3 are all the same object with different names.

// 1. Create a class Animal with the attributes name, type and color. The type is the animal type, for example: dog, cat, dolphin ect …

// class Animal {
//   constructor(name, type, color) {
//     this.name = name;
//     this.type = type;
//     this.color = color;
//   }
// }

// 2. Create a class Mamal that extends from the Animal class. Inside the class, add a method called sound(). This method takes a parameter: the sound the animal makes, and returns the details of the animal (name, type and color) as well as the sound it makes.

// class Mamal extends Animal {
//   constructor(name, type, color) {
//     super(name, type, color);
//   }
//   sound(noise) {
//     return `${noise}... I'm a ${this.type}, named ${this.name} and I'm ${this.color}`;
//   }
// }

// 3. Create a farmerCow object that is an instance of the class Mamal. The object accepts a name, a type and a color and calls the sound method that “moos” her information.
// For example: Moooo I'm a cow, named Lily and I'm brown and white

// const farmerCow = new Mamal("Bertha", "Cow", "White and Brown");
// console.log(farmerCow.sound("Mooooo"));
