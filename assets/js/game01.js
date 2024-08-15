'use strict'

const gameBot = () => {
  const hiddenNumber = Math.floor( ( Math.random() * 100 + 1 ) );
  console.log(hiddenNumber);
  let answer = prompt('Угадай число от 1 до 100');

  const tryGuess = () => {
    switch (true) {
      case answer === null:
        alert('Игра окончена...');
        break;
      case Number.isNaN(+answer):
      case answer.trim() === '':
        answer = prompt('Введи число!');
        tryGuess();
        break;
      case +answer > hiddenNumber:
        answer = prompt('Меньше!');
        tryGuess();
        break;
      case +answer < hiddenNumber:
        answer = prompt('Больше!');
        tryGuess();
        break;
      case +answer === hiddenNumber:
        alert('Правильно!');
        break;
    }
  }

  tryGuess();

}

// gameBot();