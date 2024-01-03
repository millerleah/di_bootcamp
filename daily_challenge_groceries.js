// Instructions
// Using this object :

let client = "John";

const groceries = {
  fruits: ["pear", "apple", "banana"],
  vegetables: ["tomatoes", "cucumber", "salad"],
  totalPrice: "20$",
  other: {
    paid: true,
    meansOfPayment: ["cash", "creditCard"],
  },
};

// Hint: To do this daily challenge, take a look at today’s lesson Pass By Value & Pass By Reference

// 1. Create an arrow function named displayGroceries, that console.logs the 3 fruits from the groceries object. Use the forEach method.

const displayGroceries = (obj) => {
  const fruits = obj.fruits;
  fruits.forEach((fruit) => console.log(fruit));
};
displayGroceries(groceries);

// 2. Create another arrow function named cloneGroceries.
// - In the function, create a variable named user that is a copy of the client variable. (Tip : make the user variable equal to the client variable)
// Change the client variable to “Betty”. Will we also see this modification in the user variable ? Why ?

// - In the function, create a variable named shopping that is equal to the groceries variable.
// Change the value of the totalPrice key to 35$. Will we also see this modification in the shopping object ? Why ?
// Change the value of the paid key to false. Will we also see this modification in the shopping object ? Why ?

const cloneGroceries = () => {
  let user = client;
  user = "Betty";
  console.log(user);
  console.log(client);
  //No, It looks at client and pulls over the value o the string, they are different variable and independant of each other.
  const shopping = groceries;
  groceries.totalPrice = "$35";
  console.log(shopping);
  console.log(groceries);
  //Yes, when making a varible equal to an object it makes a refreance to the same object not a copy.
  shopping.other.paid = false;
  console.log(shopping);
  console.log(groceries);
  //Yes, same as above.
};

// 3. Invoke the cloneGroceries function.

cloneGroceries();
