'use strict'

const gameBot = () => {
  const setRange = () => {
    let num1 = prompt('Введите первое число');
    let num2 = prompt('Введите второе число');

    if (num1 === null || num2 === null) {
      alert('Игра окончена...');

    }

    while (!isNaN(Number(num1)) && isNaN(Number(num2))) {
      if (isNaN(Number(num1))) {
        num1 = prompt('Введите первое число');
      }
  
      if (isNaN(Number(num2))) {
        num2 = prompt('Введите второе число');
      }
    }

    return [num1, num2];
  }

  const [num1, num2] = setRange();
  const hiddenNumber = Math.floor( ( Math.random() * ( Math.max(num1, num2) - Math.min(num1, num2) + 1 ) + Math.min(num1, num2) ) );
  const answers = [];
  let attempts = (Math.max(num1, num2) - Math.min(num1, num2) + 1) / 100 * 30 - 1;
  let answer = prompt(`Угадай число от ${Math.min(num1, num2)} до ${Math.max(num1, num2)}`);

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
      case attempts === 0:
        alert('Попытки кончились');
        break;
      case answers.some((item) => +item === +answer):
        answer = prompt('Это число вы уже вводили. Введите другое');
        tryGuess();
        break;
      case +answer > hiddenNumber:
        answers.push(answer);
        attempts -= 1;
        answer = prompt('Меньше!');
        tryGuess();
        break;
      case +answer < hiddenNumber:
        answers.push(answer);
        attempts -= 1;
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

gameBot();