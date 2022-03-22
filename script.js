'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correcy Number!';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;

let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highScore = 0;

const displayMassage = function(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);

    //When there is no input
    if(!guess) {
        //document.querySelector('.message').textContent = 'No Number!';
        displayMassage('No Number');
        //When player wins
    } else if (guess === secretNumber) {
        //document.querySelector('.message').textContent = 'Correct Number!';
        displayMassage('Correct Number');
        document.querySelector('.number').textContent = secretNumber;
        
        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';

        //set the high score
        if(score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

      //when guess is wrong  
    } else if(guess !== secretNumber) {
        if(score > 1){
           // document.querySelector('.message').textContent = guess > secretNumber ? 'Too high!' : 'Too low!';
            displayMassage(guess > secretNumber ? 'Too high!' : 'Too low!')
            score--;
            document.querySelector('.score').textContent = score;
            } else {
               // document.querySelector('.message').textContent = 'Sorry, you lost';
               displayMassage('Sorry, you lost the game');
                document.querySelector('.score').textContent = 0;
            }
    }
    
    // //When guess is too high
    // else if (guess > secretNumber) {
    //     if(score > 1){
    //     document.querySelector('.message').textContent = 'Too high!';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = 'Sorry, you lost';
    //         document.querySelector('.score').textContent = 0;
    //     }
        
    //     //When guess is too low
    // } else if (guess < secretNumber) {
    //     if(score > 1){
    //         document.querySelector('.message').textContent = 'Too low!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //         } else {
    //             document.querySelector('.message').textContent = 'Sorry you lost';
    //             document.querySelector('.score').textContent = 0;
    //         }
    // }
});

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random()*20)+1;

   // document.querySelector('.message').textContent = 'Start guessing...';
    displayMassage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});