'use strict';

const income = +prompt('Введите сумму заработка');

if (income < 15000) {
  console.log(`Ваш налог составляет ${ Math.round( income * 0.13 ) }`);
} else if (income <= 50000) {
  console.log(`Ваш налог составляет ${ Math.round( ( income - 15000 ) * 0.20 ) }`);
} else {
  console.log(`Ваш налог составляет ${ Math.round( ( income - 50000 ) * 0.30 ) }`);
}