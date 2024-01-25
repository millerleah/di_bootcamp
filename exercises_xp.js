// Exercise 1: With JSX
// Instructions
// 1. In the App.js file, display a “Hello World!” message in a paragraph.

// In app.js file:

// import React from "react";

// function App() {
//   return <p>Hello World</p>;
// }

// export default App;

// 2. Create a constant variable with JSX const myelement = <h1>I Love JSX!</h1>;, and render it on the page.

// In app.js file:

// import React from "react";
// function App() {
//   const myelement = <h1>I Love JSX!</h1>;
//   return myelement;
// }

// export default App;

// 3. Create a constant variable named sum, which value is 5 + 5. Render on the page, the following sentence "React is <sum> times better with JSX"

// In app.js file:

// import React from "react";

// function App() {
//   const sum = 5 + 5;
//   return <h1>React is {sum} times better with JSX</h1>;
// }

// export default App;

// Exercise 2 : Object
// Instructions
// Using the following object:

// const user = {
//   firstName: 'Bob',
//   lastName: 'Dylan',
//   favAnimals : ['Horse','Turtle','Elephant','Monkey']
// };
// 1. In the App.js file, render the first name and the last name of the user in two <h3>.

// in app.js file

// import React from "react";

// function App() {
//   const user = {
//     firstName: "Bob",
//     lastName: "Dylan",
//     favAnimals: ["Horse", "Turtle", "Elephant", "Monkey"],
//   };
//   return (
//     <>
//       <h3>{user.firstName}</h3>
//       <h3>{user.lastName}</h3>
//     </>
//   );
// }

// export default App;

// 2. In a separate Javascript file named UserFavoriteAnimals.js, create a new Class Component called UserFavoriteAnimals. Use props to pass the favAnimals array to the UserFavoriteAnimals component.

// 3. In the UserFavoriteAnimals component, use the map method to create <li> tags in a <ul> tag.
// Each <li> corresponds to one animal from the favAnimals array.
// Display the <li> tags. Tip : You can use the second parameter of the map function as a key to uniquely identify each HTML item

// in app.js file

// import React from "react";
// import { UserFavoriteAnimals } from "./UserFavoriteAnimals";

// function App() {
//   const user = {
//     firstName: "Bob",
//     lastName: "Dylan",
//     favAnimals: ["Horse", "Turtle", "Elephant", "Monkey"],
//   };
//   return (
//     <>
//       <UserFavoriteAnimals favorites={user.favAnimals} />
//     </>
//   );
// }

// export default App;

// In UserFavoriteAnimals.js file

// import React from "react";

// export function UserFavoriteAnimals(props) {
//   const { favorites } = props;
//   return (
//     <p>
//       {favorites.map((favorite, i) => (
//         <li key={i}>{favorite}</li>
//       ))}
//     </p>
//   );
// }

// Exercise 3 : HTML Tags In React
// Instructions
// PART I:

// 1. In a separate Javascript file, named Exercise3.js, create a new Class Component called Exercise that contains some HTML tags.
// create a <h1> tag and set its color to red, and the background color to lightblue.
// create a paragraph, a link, a form, an image and a list.

// In exercise3.js file

// import React from "react";

// export function Exercise() {
//   return (
//     <>
//       <h1
//         style={{
//           color: "red",
//           backgroundColor: "lightblue",
//         }}
//       >
//         Header
//       </h1>
//       <p>paragraph</p>
//       <a href="https://www.google.com/">Link</a>
//       <br></br>
//       <br></br>
//       <form>
//         Form <br></br>
//         <label>Label</label>
//         <br></br>
//         <input type="text"></input>
//         <input type="submit"></input>
//       </form>
//       <br></br>
//       <img src="data:image/png;base64,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"></img>
//       <br></br>
//       <br></br>
//       <li>list1</li>
//       <li>list2</li>
//     </>
//   );
// }

// 2. Import Exercise component to the App.js file and display it.

// In app.js file

// import React from "react";

// import { Exercise } from "./exercise3";

// function App() {
//   return Exercise;
// }

// export default App;

// PART II:

// 1. Add the below object to the component Exercise. Use this object to style the <h1>.
// const style_header = {
//   color: "white",
//   backgroundColor: "DodgerBlue",
//   padding: "10px",
//   fontFamily: "Arial"
// };

// In exercise3.js file

// import React from "react";

// export function Exercise() {
//   const style_header = {
//     color: "white",
//     backgroundColor: "DodgerBlue",
//     padding: "10px",
//     fontFamily: "Arial",
//   };
//   return (
//     <>
//       <h1
//         style={{
//           color: style_header.color,
//           backgroundColor: style_header.backgroundColor,
//           padding: style_header.padding,
//           frontFamily: style_header.frontFamily,
//         }}
//       >
//         Header
//       </h1>
//     </>
//   );
// }

// PART III:

// 1. Create a new css file named Exercise3.css and import it in your Exercise component.
// 2. Add the following CSS properties to the CSS file, and apply them to the paragraph tag:
// .para {
//   background-color: #282c34;
//   color: white;
//   padding: 40px;
//   font-family: Arial;
//   text-align: center;
// }

// In exercise3.js file

// import React from "react";
// import "./exercise3.css";

// export function Exercise() {
//   //   const style_header = {
//   //     color: "white",
//   //     backgroundColor: "DodgerBlue",
//   //     padding: "10px",
//   //     fontFamily: "Arial",
//   return (
//     <>
//       <p className="para">paragraph</p>
//     </>
//   );
// }
