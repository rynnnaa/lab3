"use strict";
var numberCorrect = 0;
//Alerting user to answer is only yes or no
alert("Please respond to the following questions with Y/y/yes/YES or no.");

//First Question
var responseOne = prompt("Was I born in Seattle?").toUpperCase();

//Conditional Statement
if (responseOne === "Y" || responseOne === "YES") {
  alert("Nope. I was born in Burnsville, Washington.");
} else {
  alert("That's right, I was not born in Seattle.");
  numberCorrect++
}
console.log ("numberCorrect", numberCorrect);
console.log("This is the respone to question 1" + responseOne);

//Second Question
var responseTwo = prompt("Do I like wasabi?").toUpperCase();

//Conditional Statement
if (responseTwo === "Y" || responseTwo === "YES") {
  alert("No way! So spciy!");
} else {
  alert("You are correct, I do not like wasabi AT ALL");
  numberCorrect++
}
console.log ("numberCorrect", numberCorrect);
console.log("This is the respone to question 2" + responseTwo);

//Third Question
var responseThree = prompt("Do I have any children?").toUpperCase();

//Conditional Statement
if (responseThree === "Y" || responseThree === "YES") {
  alert("Correct! I have a son named Isaac.");
  numberCorrect++
} else {
  alert("I actually have 1 child");
}
console.log ("numberCorrect", numberCorrect);
console.log("This is the respone to question 3" + responseThree);

//Foruth Question
var responseFour = prompt("Do I like to cook").toUpperCase();

//Conditional Statement
if (responseFour === "Y" || responseFour === "YES") {
  alert("You are correct! Although I am not very good it's fun!");
  numberCorrect++
} else {
  alert("Of course I do, cooking is fun!");
}
console.log ("numberCorrect", numberCorrect);
console.log("This is the respone to question 4" + responseFour);

//Fifth Question
var responseFive = prompt("Do I like Autum season?").toUpperCase();

////Conditional Statement
if (responseFive === "Y" || responseFive === "YES") {
  alert("Yes, It's my favorite season!");
  numberCorrect++
} else {
  alert("I actually love Autum.");
}
console.log ("numberCorrect", numberCorrect);
console.log("This is the respone to question 5" + responseFive);

//Sixth Question

//Conditional
var siblings = 6;
console.log('siblings', siblings);
var guess = parseInt(prompt("How many siblings do I have?"));
console.log("guess", guess);

//if too high
var i = 0;
while (guess !== siblings && i < 3) {
  if (guess > 6) {
    guess = parseInt(prompt("Your guess was too high, try again."));
    i++;
    console.log("i", i);
  }
  //if too low
  if (guess < 6 && i < 3) {
    guess = parseInt(prompt("Your guess was too low, try again."));
    i++;
    console.log("i", i);
  }
}
//If right
if (guess === 6) {
  alert("You're right! Congrat! I have " + siblings + " siblings!");
  numberCorrect++
}
else { alert("Sorry, you are out of tries!");
console.log ("numberCorrect", numberCorrect);
}
// Seventh Question
var responseSeven = prompt("What are the names of all my siblings?").toUpperCase();
var potentialResponse = ['Tony', 'David', 'Steve', 'Kevin', 'Justen', 'Lily'];
var guesses = 0;
var answer = false;

while (guesses < 5 && answer === false){

for (var k = 0; k < potentialResponse.length; k++) {
  if (responeSeven === potentialResponse[k]) {
    answer = true;
  }
}
if (answer === false) {
  
  responseSeven = prompt("Nope, try again.").toUpperCase();
console.log("responeSeven", responeSeven);
}
guesses++;
}

if (answer === true)
alert("Congratulations! You guessed correctly!");
numberCorrect++

if (answer === false)
alert("Sorry you were wrong.");


//Score Card

if (numberCorrect <= 4 ) {
  alert("You don't know me very well.");
 } else { alert("Wow you know me pretty well!");
 console.log ("numberCorrect", numberCorrect);
}