'use strict';

const firstNum = +prompt('Введите первое число');
const secondNum = +prompt('Введите второе число');

const searchMinNumber = (a, b) => {
  const avr = (a + b) / 2;
  const min = avr - Math.abs(a - b) / 2;

  return min;
}

console.log(searchMinNumber(firstNum, secondNum));