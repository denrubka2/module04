'use strict';
 
const gameBot = () => {
  const setRange = () => {
    const range = [];

    while (range.length < 2 && !range.includes(null)) {
      const num = prompt(`Введите ${range.length ? 'второе' : 'первое'} число`);

      if (num?.trim() !== '' && !isNaN(num) && !range.includes(num)) {
        range.push(num);
      }
    }

    return range.includes(null) ? false :
      range.sort((a, b) => (+a > +b ? 1 : -1));
  };

  const range = setRange();

  if (range) {
    const [min, max] = range;
    const hiddenNumber = Math.floor(Math.random() * (+max - +min + 1) + +min);
    const answers = [];
    const attempts = Math.round((+max - +min + 1) / 100 * 30 - 1);

    console.log('hiddenNumber: ' + hiddenNumber);
    console.log('attempts: ' + attempts);

    const tryGuess = (answer) => {
      answer = prompt(answer);

      switch (true) {
        case answer === null:
          alert('Игра окончена...');
          return answers;
        case Number.isNaN(+answer):
        case +answer > +max:
        case +answer < +min:
        case answer.trim() === '':
          answer = `Введи число от ${min} до ${max}!`;
          break;
        case answers.length === +attempts:
          +answer === hiddenNumber ?
            alert('Правильно!') :
            alert('Попытки кончились');
          answers.push(answer);
          return answers;
        case answers.some((item) => +item === +answer):
          answer = 'Это число вы уже вводили. Введите другое';
          break;
        case +answer > hiddenNumber:
          answers.push(answer);
          answer = 'Меньше!';
          break;
        case +answer < hiddenNumber:
          answers.push(answer);
          answer = 'Больше!';
          break;
        case +answer === hiddenNumber:
          alert('Правильно!');
          answers.push(answer);
          return answers;
      }

      return tryGuess(answer);
    };

    return tryGuess(`Угадай число от ${min} до ${max}`);
  } else {
    alert('Игра окончена...');
  }
};

// gameBot();
