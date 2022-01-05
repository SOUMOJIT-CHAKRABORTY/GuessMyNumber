'use strict';

//const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
let secretNumber = Math.trunc(Math.random() * 20) + 1;
var check = document.querySelector('.check');
let score = 20;
let highScore = 0;

check.addEventListener('click', function () {
  var guessValue = Number(document.querySelector('.guess').value);
  console.log(guessValue);

  // When no number is entered -->
  if (!guessValue) {
    console.log('⛔️ No Number!');
    document.querySelector('.message').textContent = '⛔️No Number!';
  }
  // When number is equal to the corret one -->
  else if (guessValue === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number:';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  }
  // When number is not equal to the correct one -->
  else if (guessValue !== secretNumber) {
    if (guessValue > secretNumber) {
      if (score > 0) {
        document.querySelector('.message').textContent = '📈 High';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent =
          '😖 You lost the game!';
      }
    } else if (guessValue < secretNumber) {
      if (score > 0) {
        document.querySelector('.message').textContent = '📉 Low';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent =
          '😖 You lost the game!';
      }
    }
  }
});

var again = document.querySelector('.again');

again.addEventListener('click', function () {
  score = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  //document.querySelector('.highscore').textContent = score;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';

  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
