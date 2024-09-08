'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '😘Congradulation china';

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 78;
document.querySelector('.score').textContent = 100;
console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 29;
console.log(document.querySelector('.guess').value);
*/
let score = 20;
let secretNumber = Math.trunc(Math.random() * 100) + 1;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //When there is no input.
  if (!guess) {
    //document.querySelector('.messgage').textContent='A mallu number hak sayi⛔⛔';

    // calling the method or function

    displayMessage('A mallu number hak sayi⛔⛔');
  }
  //When player wins.
  else if (guess === secretNumber) {
    //document.querySelector('.message').textContent ='Shay correct ala mare🏆🏆🏆';

    //calling the method

    displayMessage('Shay correct ala mare🏆🏆🏆');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  //When guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      //document.querySelector('.message').textContent =
      //guess > secretNumber ? 'Jasti yo mare🤦👍👍' : 'Kmi yo mare🤦👎👎👎';

      // calling the function here

      displayMessage(
        guess > secretNumber ? 'Jasti yo mare🤦👍👍' : 'Kmi yo mare🤦👎👎👎'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //document.querySelector('.message').textContent =
      // 'Ait mane hog Sote ninu.😂😂';

      //calling the function
      displayMessage('Ait mane hog Sote ninu.😂😂');

      document.querySelector('.score').textContent = 0;
    }
  }
  //When guess is to low.
  /* else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Kmi yo mare🤦👎👎👎';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'Ait mane hog Sote ninu.😂😂';
    }
  }
  //When guess is to high.
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Jasti yo mare🤦👍👍';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'Ait mane hog Sote ninu.😂😂';
    }
  }
  */
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 100) + 1;
  //document.querySelector('.message').textContent = 'Start guessing...';

  //calling the function to reduce the code redendency

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
