'use strict';

(() => {
  const FIGURES = {
    ENG: ['Rock', 'Scissors', 'Paper'],
    RUS: ['Камень', 'Ножницы', 'Бумага'],
  }

  const getLanguageFigures = (lang) => {
    if(lang) {
      return Object.keys(FIGURES).find(str => str.toLowerCase().startsWith(lang.toLowerCase()));
    }
  }

  const getRandomIntInclusive = (min, max) => {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);

    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
  }

  const results = {
    user: 0,
    computer: 0,
  }

  const game = (language = '') => {
    const lang = getLanguageFigures(language) ? getLanguageFigures(language) : 'RUS';
    const figures = FIGURES[lang];

    const getResults = () => alert(`Счет :\n` +
      `Вы : ${results.user}\n` +
        `Компьютер : ${results.computer}`);

    const getUserFigure = (userChoice) => 
      figures.find(str => str.toLowerCase().startsWith(userChoice.toLowerCase()));

    const getComputerFigure = () => 
      figures[getRandomIntInclusive(0, figures.length - 1)];

    return function start() {
      const word = prompt(`${figures} ?`);

      if(word === null) {
        if(confirm('Вы точно хотите выйти?')) {
          alert('Игра окончена...');
          getResults();
          return false;
        } else {
          return start();
        }
      }

      if(word.trim() === '') {
        return start();
      }
    
      const userFigure = getUserFigure(word);
      const userIndex = figures.indexOf(userFigure);
      const computerFigure = getComputerFigure();
      const computerIndex = figures.indexOf(computerFigure);
      
      switch (true) {
        case userFigure === undefined:
          return start();
        case userFigure === computerFigure:
          alert(`Вы : ${userFigure}\n` + 
            `Компьютер : ${computerFigure}\n` + 
              'Ничья!');
          break;
        case (userIndex + 1) % figures.length === computerIndex:
          alert(`Вы : ${userFigure}\n` + 
            `Компьютер : ${computerFigure}\n` + 
              'Вы победили!');
          ++results.user;
        break;
        default:
          alert(`Вы : ${userFigure}\n` + 
            `Компьютер : ${computerFigure}\n` + 
              'Вы проиграли!');
          ++results.computer;
      }

      if(confirm('Играем еще?')) {
        return start();
      } else {
        getResults();
      }
    }

    }

    window.RPS = game('EN');

})();