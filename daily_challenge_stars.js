//1.  Write a JavaScript program that recreates the pattern below.
//2.  Do this challenge twice: first by using one loop, then by using two nested for loops (Nested means one inside the other - check out this tutorial of nested loops).
// *
// * *
// * * *
// * * * *
// * * * * *
// * * * * * *

let stars = "";

for (let x = 0; x < 6; x++) {
  stars = stars + " * ";
  console.log(stars);
}

for (let i = 0; i < 6; i++) {
  let numberOfStars = i + 1;
  let starsLine = "";
  for (let j = 0; j < numberOfStars; j++) {
    starsLine = starsLine + " * ";
  }
  console.log(starsLine);
}
