'use strict';

(() => {
  const FIGURES_ENG = ['Rock', 'Scissors', 'Paper'];
  const FIGURES_RUS = ['Камень', 'Ножницы', 'Бумага'];

  const getRandomIntInclusive = (min, max) => {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);

    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
  }

  const getFigure = () => {
    const userFigure = prompt(`${FIGURES_RUS.slice(',')}?`);
    const pcFigure = FIGURES_RUS[getRandomIntInclusive(0, FIGURES_RUS.length - 1)];
    const isWord = FIGURES_RUS.findIndex(str => str.includes(userFigure));

    switch (true) {
      case userFigure === null:
        return null;
        break;
    }
  }

  getFigure();

})();