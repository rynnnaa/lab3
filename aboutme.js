'use strict';
var numberCorrect = 0;
//Alerting user to answer is only yes or no
alert('Please respond to the following questions with YES or NO.');

function question( varible1, varible2) {
  if ( varible1 === varible2 ){
    alert( 'correct'); numberCorrect++; }
  else { alert ('wrong')}
  }

//First Question
var responseOne = prompt('Was I born in Seattle?').toUpperCase();
var ansOne = 'NO';
question(responseOne, ansOne);


//Second Question
var responseTwo = prompt('Do I like wasabi?').toUpperCase();
var ansTwo = 'NO';
question(responseTwo, ansTwo);



// //Third Question
var responseThree = prompt('Do I have any children?').toUpperCase();
var ansThree = 'YES';
question(responseThree, ansThree);



// //Foruth Question
var responseFour = prompt('Do I like to cook').toUpperCase();
var ansFour = 'YES'
question(responseFour, ansFour);


// //Fifth Question
var responseFive = prompt('Do I like Autum season?').toUpperCase();
var ansFive = 'YES';
question(responseFive, ansFive);


// //Sixth Question

// //Conditional
// var siblings = 6;
// console.log('siblings', siblings);
// var guess = parseInt(prompt('How many siblings do I have?'));
// console.log('guess', guess);

// //if too high
// var i = 0;
// while (guess !== siblings && i < 3) {
//   if (guess > 6) {
//     guess = parseInt(prompt('Your guess was too high, try again.'));
//     i++;
//     console.log('i', i);
//   }
//   //if too low
//   if (guess !== siblings  && i < 3) {
//     guess = parseInt(prompt('Your guess was too low, try again.'));
//     i++;
//     console.log('i', i);
//   }
// }
// //If right
// if (guess === 6) {
//   alert('You're right! Congrat! I have ' + siblings + ' siblings!');
//   numberCorrect++;
// } else {
//   alert('Sorry, you are out of tries!');
//   console.log('numberCorrect', numberCorrect);
// }
// // Seventh Question
// prompt('What are the names of all my siblings?').toUpperCase();
// var responseSeven;
// var potentialResponse = ['Tony', 'David', 'Steve', 'Kevin', 'Justen', 'Lily'];
// var guesses = 0;
// var answer = false;

// while (guesses < 5 && answer === false) {
//   for (var k = 0; k < potentialResponse.length; k++) {
//     if (responseSeven === potentialResponse[k]) {
//       answer = true;
//     }
//   }
//   if (answer === false) {
//     responseSeven = prompt('Nope, try again.').toUpperCase();
//     console.log('responeSeven', responseSeven);
//   }
//   guesses++;
// }

// if (answer === true) {
//   alert('Congratulations! You guessed correctly!');
//   numberCorrect++;
// }
// if (answer === false) {
//   alert('Sorry you were wrong.');
// }

// //Score Card

// if (numberCorrect <= 4) {
//   alert('You got ' + numberCorrect + ' out of 7. You don't know me very well.');
// } else {
//   alert('Wow, you got ' + numberCorrect + ' out of 7. You know me pretty well!');
//   console.log('numberCorrect', numberCorrect);
// }
