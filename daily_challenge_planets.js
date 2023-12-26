// Instructions
// In this exercise we will be creating a webpage with a black background as the universe and we will fill the universe with planets and their moons.
// We will provide the HTML page.
// You only have to work with a JS file.

// 1. Create an array which value is the planets of the solar system.

// const planets = [
//   "Earth",
//   "Mars",
//   "Mercury",
//   "Jupiter",
//   "Uranus",
//   "Neptune",
//   "Saturn",
//   "Venus",
// ];

// 2. For each planet in the array, create a <div> using createElement. This div should have a class named "planet".

// for (const planet of planets) {
//   const div = document.createElement("div");
//   div.classList.add("planet");
//   div.classList.add(planet.toLowerCase());
//   console.log(div);

//   const appendPlanets = document.querySelector(".listPlanets");
//   appendPlanets.append(div);
// }

// 3. Each planet should have a different background color. (Hint: you could add a new class to each planet - each class containing a different background-color).

// let planetEarth = document.getElementsByClassName("planet earth");
// console.log(planetEarth);

// let planetEarth = document.querySelector(".planet.earth");
// planetEarth.style.backgroundColor = "red";

// let planetMars = document.querySelector(".planet.mars");
// planetMars.style.backgroundColor = "orange";

// let planetMercury = document.querySelector(".planet.mercury");
// planetMercury.style.backgroundColor = "yellow";

// let planetJupiter = document.querySelector(".planet.jupiter");
// planetJupiter.style.backgroundColor = "green";

// let planetUranus = document.querySelector(".planet.uranus");
// planetUranus.style.backgroundColor = "purple";

// let planetNeptune = document.querySelector(".planet.neptune");
// planetNeptune.style.backgroundColor = "blue";

// let planetSaturn = document.querySelector(".planet.saturn");
// planetSaturn.style.backgroundColor = "brown";

// let planetVenus = document.querySelector(".planet.venus");
// planetVenus.style.backgroundColor = "white";

//4.  Finally append each div to the <section> in the HTML (presented below).

// ^ See above

// 5. Bonus: Do the same process to create the moons.
// Be careful, each planet has a certain amount of moons. How should you display them?
// Should you still use an array for the planets ? Or an array of objects ?

// The moons are't appearing and I do not know why.

const planetsMoons = [
  { name: "Earth", moons: 1 },
  { name: "Mars", moons: 2 },
  { name: "Mercury", moons: 0 },
  { name: "Jupiter", moons: 5 },
  { name: "Uranus", moons: 2 },
  { name: "Neptune", moons: 4 },
  { name: "Saturn", moons: 6 },
  { name: "Venus", moons: 0 },
];

for (const planet of planetsMoons) {
  const planetsDiv = document.createElement("div");
  planetsDiv.classList.add("planet");
  planetsDiv.classList.add(planet.name.toLowerCase());

  for (let i = 0; i < planetsMoons.moons; i++) {
    const moonDiv = document.createElement("div");
    moonDiv.classList.add(".moon");
    moonDiv.style.left = i * 10 + "px";
    planetsDiv.appendChild(moonDiv);
  }

  const appending = document.querySelector(".listPlanets");
  appending.appendChild(planetsDiv);
}
