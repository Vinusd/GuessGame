'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct answer'

// document.querySelector('.number').textContent = '13'

// document.querySelector('.score').textContent  = '10'

// console.log(document.querySelector('.guess').value)

// document.querySelector('.guess').value = '100'

let secretNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message
}

const displayScore = function(score){
    document.querySelector('.score').textContent = score
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //No guess values
  if (!guess) {
    displayMessage('No number!');
    //Player wins
  } else if (guess === secretNum) {
    displayMessage('Correct number');
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNum;
    if(score > highScore){
        highScore = score;
        document.querySelector('.highscore').textContent = highScore
    }
    //Player Losses High
  } else if (guess !== secretNum) {
    if (score > 1) {
        displayMessage(guess > secretNum ?'Too high!' : 'Too Low!');
      score--;
      displayScore(score);
    } else {
        displayMessage('Game Lost!');
        displayScore(0);
      document.querySelector('body').style.backgroundColor = '#cf2942';
    }
  } 
});

//Reset the game
document.querySelector('.again').addEventListener('click',function(){
    score =20
    document.querySelector('.number').textContent = '?';
    displayMessage('Start guessing...')
    displayScore(score);
    secretNum = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = ''
})
