// Get a reference to the form
const form = document.getElementById("userForm");

// Listen for the form’s submit event
form.addEventListener("submit", function (event) {
  // Stop the browser from reloading the page
  event.preventDefault();

  // 1. Read the values the user typed
  const firstName = document.getElementById("fname").value.trim();
  const lastName  = document.getElementById("lname").value.trim();
  const email     = document.getElementById("email").value.trim();
  const age       = document.getElementById("age").value;

  // 2. Build the text we want to show
  const fullNameText = `Name: ${firstName} ${lastName}`;
  const emailText    = `Email: ${email}`;
  const ageText      = `Age: ${age}`;

  // 3. Write the text into the <h1> elements
  document.getElementById("fullName").textContent     = fullNameText;
  document.getElementById("displayEmail").textContent = emailText;
  document.getElementById("displayAge").textContent   = ageText;
});