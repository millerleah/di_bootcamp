// Instructions : React Voting App

// Steps
// 1. In the App.js create an array of objects in the state. Each object contains the language and the number of votes per language.
// Use the below object as a starting point:

// const [languages, setLanguages] = useState([
//                                             {name: "Php", votes: 0},
//                                             {name: "Python", votes: 0},
//                                             {name: "JavaSript", votes: 0},
//                                             {name: "Java", votes: 0}
//                                           ])
// <br>

// 2. Create a function that increases the state of the votes by one, when you click on a specific language button.

// In app.js file:

// import { Voting } from "./daily_challenge_voting_app";

// function App() {
//   return <Voting />;
// }

// export default App;

// In this file:

import { useState } from "react";
import "./daily_challenge_voting_app.css";

export function Voting() {
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaScript", votes: 0 },
    { name: "Java", votes: 0 },
  ]);

  const incrementCount = (languageName) => {
    const updateVotes = languages.map((lang) =>
      lang.name === languageName ? { ...lang, votes: lang.votes + 1 } : lang
    );
    setLanguages(updateVotes);
  };
  return (
    <>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Vote Your Language
      </h1>
      <div className="languages">
        {languages.map((item, i) => (
          <div key={i} className="language">
            {item.votes} {item.name}
            <button onClick={() => incrementCount(item.name)}>
              Click Here
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

// In daily_challenge_voting_app.css file:

// .languages {
//   display: flex;
//   flex-direction: column;
// }
// .language {
//   border: 1px solid black;
//   background-color: #ffebcd;
//   padding: 1rem;
//   width: fit-content;
//   margin: 10px auto;
// }

// .language button {
//   color: green;
//   background-color: transparent;
//   border: none;
//   cursor: pointer;
// }

// .language button:hover {
//   scale: 1.02;
// }
