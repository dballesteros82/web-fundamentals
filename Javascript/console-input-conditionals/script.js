/*
Using the User Input module as a reference. 
Create a console based program that prompts the user to input their age. 
For users 16 and under print out "Stay home, study, and get your drivers license"
For users 18 and over print out "Have some fun, but not TOO much fun. You're still a young adult"
For users 21 and over print out "Have fun. But be responsible. You are in control of your life"
*/
let age = prompt('Please enter your age: ');
if (age !== null) {
  age = Number(age);
  if (age >= 21) {
      console.log("Have fun. But be responsible. You are in control of your life");
  } else if (age >= 18) {
      console.log("Have some fun, but not TOO much fun. You're still a young adult.");
  } else if (age >= 16) {
    console.log("Stay home, study, and get your drivers license");
  } else {
    console.log("You're either too young, or you didn't enter a valid value.")
  }
}