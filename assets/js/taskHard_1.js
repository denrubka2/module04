'use strict';

const earnings = +prompt('Введите сумму заработка');

if (earnings < 15000) {
  console.log(`Ваш налог составляет ${ earnings * 0.13 }`);
} else if (earnings < 50000) {
  console.log(`Ваш налог составляет ${ earnings * 0.20 }`);
} else {
  console.log(`Ваш налог составляет ${ earnings * 0.30 }`);
}