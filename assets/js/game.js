'use strict';

(() => {
  const results = {
    userBalls: 5,
    computerBalls: 5,
  }

  const game = () => {

    const getResults = () => alert(`Счет :\n
      Вы : ${results.userBalls}\n
      Компьютер : ${results.computerBalls}`);

    return function start() {

      const rules = ['Четное', 'Нечетное'];
      const userEnter = prompt(`Загадай число шариков от 1 до ${results.userBalls}`);
      const computerEnter = rules[Math.round(Math.random() * 1)];

      switch (true) {
        case userEnter === null:
          return false;
        case userEnter.trim() === '':
        case userEnter < 1:
        case userEnter > results.userBalls:
          return start();
        case rules[userEnter % 2] === computerEnter:
          alert(`Вы : ${userEnter} \n
            Компьютер : ${computerEnter}\n
            Компьютер выиграл!\n
            Количество ваших шариков : ${results.userBalls}\n
            Количество шариков у компьютера : ${results.computerBalls}`);
          break;
        case rules[userEnter % 2] !== computerEnter:
          alert(`Вы : ${userEnter} \n
            Компьютер : ${computerEnter}\n
            Компьютер проиграл!\n
            Количество ваших шариков : ${results.userBalls}\n
            Количество шариков у компьютера : ${results.computerBalls}`);
          break;
      }
    }
  }

  const startGame = game();
  startGame()

})();