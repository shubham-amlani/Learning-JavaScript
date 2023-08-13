'use strict';

/*
console.log(displayMessage()displayMessage()'🎉 Correct Number!';
console.log(displayMessage()
document.querySelector('.number').textContent = 14;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value =19;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc( Math.random()*20 + 1);
let score = 20;
let highscore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}
// console.log(secretNumber);

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    // console.log(guess, typeof guess);
    //when there is no input
    if(!guess) {
        displayMessage('🚫 No number!');
      
    }
    //when player wins 
    else if(guess === secretNumber){
        displayMessage('🎉 Correct Number!');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        
        if(score>highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
        document.querySelector('.number').style.width = '30rem';
    } 
            //when guess is wrong

    else if(guess!==secretNumber){
        if(score>1){
            displayMessage(guess>secretNumber?'📈 Too high!':'📉 Too low!');
        score--;
        document.querySelector('.score').textContent = score;
        } 
        //when no attempts are left
        else {
            displayMessage('You lost the game!💥');
            document.querySelector('.score').textContent = 0;
        }
    }
    // //when guess is high
    // else if(guess > secretNumber){
    //     if(score>1){
    //         displayMessage()'📈 Too high!';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //     } 
    //     //when no attempts are left
    //     else {
    //         displayMessage()'You lost the game!💥';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // } 
    // //when guess is low
    // else if(guess < secretNumber){
    //     if(score>1){
    //         displayMessage()'📉 Too low!';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //     } 
    //     //when no attempts are left

    //     else {
    //         displayMessage()'You lost the game!💥';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }
    document.querySelector('.again').addEventListener('click', function(){
        score = 20;
        secretNumber = Math.trunc( Math.random()*20 + 1);
        // console.log(secretNumber);
        displayMessage('Start guessing...');
        document.querySelector('.score').textContent = score;
        document.querySelector('.guess').value = '';
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').textContent = '?';
        document.querySelector('.number').style.width = '15rem';
    });
});
