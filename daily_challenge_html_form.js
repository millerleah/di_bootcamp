// Instructions
// 1. Create a form with two fields (name, last name) and a submit button.
/* <form id="myform" action="" method="GET">
  <label for="firstname">First Name</label>
  <input type="text" name="firstname" value="John" />
  <label for="lastname">Last Name</label>
  <input type="text" name="lastname" value="Doe" />
  <input type="submit" value="Submit" />
</form>; */

// 2. When you click the Send button, retrieve the data from the inputs, and append it on the DOM as a JSON string.

document.getElementById("myform").addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();

  const formData = new FormData(document.getElementById("myform"));

  const data = formData.entries();
  const value = Object.fromEntries(data);

  const dataString = JSON.stringify(value);

  const p = document.createElement("p");
  p.innerText = dataString;
  document.body.appendChild(p);
}
