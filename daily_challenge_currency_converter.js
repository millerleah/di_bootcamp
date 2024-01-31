// Instructions
// You will create a currencies converter:

// In this application we’re going receive data from two asynchronous sources.

// You will use :

// This documentation
// Create your own API key by signing up - you will be able to make more requests :)

// Note
// 1. The program should take the currency which the user currently has and the currency in which they would like to receive, as well as the amount of money. Afterwards, the program will output the correct exchange rate based on the data from the APIs.

// 2. First, you need to fetch all the supported currencies, in order to add the currencies options (ie FROM - To) in the currency converter. Check out this page on Supported Codes Endpoint from the ExchangeRate API documentation.

const div = document.getElementById("convert");
const from = document.getElementById("from");
const to = document.getElementById("to");
const input = document.getElementById("amount");
const button = document
  .getElementById("btn")
  .addEventListener("click", convert);

async function getCurrencies() {
  try {
    const url =
      "https://v6.exchangerate-api.com/v6/95e2fc90a21651da58185c8b/codes";
    const response = await fetch(url, {
      method: "GET",
    });
    const data = await response.json();
    console.log(data);
    addCurrencies(data.supported_codes);
  } catch (error) {
    console.log(error);
  }
}

// 3. To convert from a currency, to another one, you need to fetch conversion rate from the Pair Conversion API endpoint. Check out this page on Pair conversion requests from the ExchangeRate API documentation.
// Hint: You could also supply an optional AMOUNT variable in the query of the request.

function addCurrencies(codes) {
  const entries = Object.entries(codes);

  for (const entry of entries) {
    const [index, [code, name]] = entry;
    const option1 = document.createElement("option");
    const option2 = document.createElement("option");
    option1.innerText = `${code} - ${name}`;
    option1.value = code;
    // console.log(option1)

    option2.innerText = `${code} - ${name}`;
    option2.value = code;

    from.appendChild(option1);
    to.appendChild(option2);
  }
}

// 4. Bonus: Add this “switch” button on the page, when clicked on it will switch the currencies and display the new amount converted.
// Example : if the conversion was from EUR to GBP, as soon as the button is clicked on, the conversion should be from GBP to EUR.

async function convert() {
  const currency1 = from.value;
  console.log(currency1);
  const currency2 = to.value;
  console.log(currency2);
  const url = `https://v6.exchangerate-api.com/v6/95e2fc90a21651da58185c8b/pair/${currency1}/${currency2}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    const rate = data.conversion_rate;
    const armount = Number(input.value);
    const total = armount * rate;
    console.log(total);

    const p = document.createElement("p");
    p.innerText = `${total} ${currency2}`;
    div.appendChild(p);
  } catch (error) {
    console.log(error);
  }
}

getCurrencies();

// In html file:

// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Document</title>
//   </head>
//   <body>
//     <h1>Javascript Week 7 Day 5</h1>
//     <h2>Daily Challenge Currency Converter</h2>
//     <div class="container" id="convert">
//       <h2>From:</h2>
//       <select name="from" id="from"></select>
//       <h2>To:</h2>
//       <select name="to" id="to"></select>
//       <h2>Amount:</h2>
//       <input type="text" name="amount" id="amount" /><button id="btn">
//         Convert
//       </button>
//     </div>
//     <script src="daily_challenge_currency_converter.js"></script>
//   </body>
// </html>
