/* 
Create a console based assignment that prompts the user for their:
Full Name
Favorite Food
Favorite Activity
After the user has submitted their data write the information to the HTML document.  
all of the data should display as <h1> tags.
*/

//let userName = prompt("What is your full name? ");

let nameTag = document.getElementById("fullName");
nameTag.innerText = prompt("What is your full name? ");

let favFood = document.getElementById("favFood");
favFood.innerText = prompt("What is your favorite food? ");

let favAct = document.getElementById("favActivity");
favAct.innerText = prompt("What is your favorite activity? ");