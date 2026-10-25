/* 
Write your first name and last name to the HTML document. 
Your first and last name should be housed within a <h1> tag. 
*/

const h1 = document.createElement("h1");
h1.innerHTML = "Delfino Ballesteros";
document.body.appendChild(h1);

/*
Write your favorite color to the document. This should be housed within an <h3> tag. 
Try changing the color of the text to match your favorite color. 
Remember you can only do this using JavaScript.
*/

const h3 = document.createElement("h3");
h3.innerHTML = "Blue";
h3.style.color = "Blue";
document.body.appendChild(h3);

/*
Write you favorite food to the document. This should also be housed within an <h3> tag. 
Below it place an image of your favorite food in the document. 
This should also only be done using JavaScript
*/

const favFood = document.createElement("h3");
h3.innerText = "Tacos de Lengua";
document.body.appendChild(h3);

const img = document.createElement("img");
img.src = "tacos-de-lengua.jpg";
img.alt = "Tacos de Lengua";
img.width = 500;
document.body.appendChild(img);