'use strict';

// Вторая задача

const rain = Math.round(Math.random());

if (rain > 0) {
  console.log('Пошёл дождь. Возьмите зонт!');
} else {
  console.log('Дождя нет!');
}

// Третья задача

const mathScores = +prompt('Введите кол-во баллов по математике');
const russianScores = +prompt('Введите кол-во баллов по русскому языку');
const informaticsScores = +prompt('Введите кол-во баллов по информатике');
const totalScores = mathScores + russianScores + informaticsScores;

if(totalScores >= 256) {
  alert('Поздравляю, вы поступили на бюджет!');
} else if (isNaN(totalScores)) {
  alert('Вы ввели некорректные данные');
} else {
  alert('Не поздравляю');
}

// Четвертая задача

const howMuchMoney = +prompt('Сколько денег Вы хотите снять?');

if (isNaN(howMuchMoney) || howMuchMoney <= 0) {
  console.log('Вы ввели некорректные данные');
} else if (howMuchMoney % 100 !== 0) {
  console.log('Банкомат не может выдать такую сумму. В банкомате имеются только купюры номиналом в 100 рублей');
} else {
  console.log('Трррррррррр');
}