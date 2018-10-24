"use strict";

//Alerting user to answer is only yes or no
alert("Please respond to the following questions with Y/y/yes/YES or no.");

//First Question
var responseOne = prompt("Was I born in Seattle?").toUpperCase();

//Conditional Statement
if (responseOne === "Y" || responseOne === "YES") {
  alert("Nope. I was born in Burnsville, Washington.");
} else {
  alert("That's right, I was not born in Seattle.");
}
console.log("This is the respone to question 1" + responseOne);

//Second Question
var responseTwo = prompt("Do I like wasabi?").toUpperCase();

//Conditional Statement
if (responseTwo === "Y" || responseTwo === "YES") {
  alert("No way! So spciy!");
} else {
  alert("You are correct, I do not like wasabi AT ALL");
}
console.log("This is the respone to question 2" + responseTwo);

//Third Question
var responseThree = prompt("Do I have any children?").toUpperCase();

//Conditional Statement
if (responseThree === "Y" || responseThree === "YES") {
  alert("Correct! I have a son named Isaac.");
} else {
  alert("I actually have 1 child");
}
console.log("This is the respone to question 3" + responseThree);

//Foruth Question
var responseFour = prompt("Do I like to cook").toUpperCase();

//Conditional Statement
if (responseFour === "Y" || responseFour === "YES") {
  alert("You are correct! Although I am not very good it's fun!");
} else {
  alert("Of course I do, cooking is fun!");
}
console.log("This is the respone to question 4" + responseFour);

//Fifth Question
var responseFive = prompt("Do I like Autum season?").toUpperCase();

//Conditional Statement
if (responseFive === "Y" || responseFive === "YES") {
  alert("Yes, It's my favorite season!");
} else {
  alert("I actually love Autum.");
}
console.log("This is the respone to question 5" + responseFive);

//Sixth Question

//Conditional
var correctNumber = 6;
console.log("Correct Number", correctNumber);
var numberGuess = parseInt(prompt("How many siblings do I have?"));
console.log("Number Guess", numberGuess);

//if too high
var i = 0;
while (numberGuess !== correctNumber && i < 3) {
  if (numberGuess > 6) {
    numberGuess = parseInt(prompt("Your guess was too high, try again."));
    i++;
    console.log("i", i);
  }
  //if too low
  if (numberGuess < 6 && i < 3) {
    numberGuess = parseInt(prompt("Your guess was too low, try again."));
    i++;
    console.log("i", i);
  }
}
//If right
if (numberGuess === 6) {
  alert("You're right! Congrat! I have " + correctNumber + " siblings!");
}
else { alert("Sorry, you are out of tries!");
}
// Seventh Question

"Can you guess what two colors my dog\'s fur is?"

//Score Card