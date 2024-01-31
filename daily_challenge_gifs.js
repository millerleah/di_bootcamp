// Instructions
// 1. Use this Giphy API Random documentation. Use this API Key : hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My

// 2. In the HTML file, add a form, containing an input and a button. This input is used to fetch gif depending on a specific category.

const form = document.forms[0];
const input = form[0];
console.log(input);
const div = document.querySelector("div");
console.log(div);

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const search = input.value;
  randomGif(search);
});

// 3. In the JS file, create a program to fetch one random gif depending on the search of the user (ie. If the search is “sun”, append on the page one gif with a category of “sun”).

const randomGif = async (search) => {
  try {
    const randNum = randomNum(50);
    const apiKey = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${search}`;
    response = await fetch(url);
    data = await response.json();
    const gifUrl = data.data[randNum].images.original.url;
    render(gifUrl);
  } catch (e) {
    console.log(e);
  }
};

const randomNum = (max) => {
  return Math.floor(Math.random() * max);
};

// 4. The gif should be appended with a DELETE button next to it. Hint : to find the URL of the gif, look for the sub-object named “images” inside the data you receive from the API.

// 5. Allow the user to delete a specific gif by clicking the DELETE button.

const render = (gifUrl) => {
  const img = document.createElement("img");
  img.src = gifUrl;
  div.appendChild(img);
  const del = document.createElement("button");
  del.textContent = "Delete";
  del.className = "deletebutton";
  div.appendChild(del);
  del.addEventListener("click", function (e) {
    e.preventDefault();
    img.remove();
    del.remove();
  });
};

// 6. Allow the user to remove all of the GIFs by clicking a DELETE ALL button.

const delAll = document.getElementById("delAll");
delAll.addEventListener("click", function (e) {
  e.preventDefault();
  const allImg = document.querySelectorAll("img");
  allImg.forEach((img) => {
    img.remove();
  });
  const bu = document.querySelectorAll(".deletebutton");
  bu.forEach((bu) => {
    bu.remove();
  });
});

// In html file:

// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Document</title>
//   </head>
//   <body>
//     <h1>Javascript Week 7 Day 4</h1>
//     <h2>Daily Challenge Gifs</h2>
//     <form action="">
//       <input type="text" />
//       <input type="submit" />
//     </form>
//     <div>
//       <button id="delAll">Delete All</button>
//     </div>
//     <script src="daily_challenge_gifs.js"></script>
//   </body>
// </html>
