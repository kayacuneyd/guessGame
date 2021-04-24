'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number!'
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);

*/

let secretNumber = Math.trunc(Math.random() * 100) + 1;
let score = 40; // This variable is also called as 'state variable'.
let highScore = 0;
let displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

let displayNumber = function (number) {
    document.querySelector('.number').textContent = number;
}

let displayScore = function (yourScore) {
    document.querySelector('.score').textContent = yourScore;
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    //console.log(guess, typeof guess);

    //When there is no input
    if(!guess) {
        //document.querySelector('.message').textContent = 'No Number to guess!';
        displayMessage('No Number to guess!');
    //When player wins
    } else if (guess === secretNumber){

        //document.querySelector('.message').textContent = 'Correct Number!';
        displayMessage('Correct Number!');
        //document.querySelector('.number').textContent = secretNumber;
        displayNumber(secretNumber);
        document.querySelector('body').style.backgroundColor = '#1B93B6FF';

        document.querySelector('.number').style.width = '30rem';

        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

    //When guess is wrong
    } else if (guess !== secretNumber) {

        if (score > 1) {

            //document.querySelector('.message').textContent = guess > secretNumber ? 'The guess is too high!' : 'The guess is too low';
            displayMessage(guess > secretNumber ? 'The guess is too high!' : 'The guess is too low');
            score--;
            //document.querySelector('.score').textContent = score;
            displayScore(score);

        } else {
            //document.querySelector('.message').textContent = 'You lost the game :(';
            displayMessage('You lost the game :(');
            score--;
            //document.querySelector('.score').textContent = 0;
            displayScore(0);
        }
    }
    //When the guess is too high
    // } else if (guess > secretNumber){
    //     if (score > 1){
    //
    //         document.querySelector('.message').textContent = 'The guess is too high!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //
    //     } else {
    //         document.querySelector('.message').textContent = 'You lost the game :(';
    //         score--;
    //         document.querySelector('.score').textContent = 0;
    //     }
    //
    //
    // //When the guess is too low
    // } else if (guess < secretNumber){
    //
    //     if (score > 1){
    //
    //         document.querySelector('.message').textContent = 'The guess is too low!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //
    //     } else {
    //         document.querySelector('.message').textContent = 'You lost the game :(';
    //         score--;
    //         document.querySelector('.score').textContent = 0;
    //     }
    //
    // }


});


document.querySelector('.again').addEventListener('click', function () {
    score = 40;
    secretNumber = Math.trunc(Math.random() * 100) + 1; //we're reassigning the secret number here

    //document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    //document.querySelector('.score').textContent = score;
    displayScore(score);
    //document.querySelector('.number').textContent = '?';
    displayNumber('?');
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

});