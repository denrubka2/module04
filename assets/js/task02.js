'use strict';

const allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

const getAverageValue = (cashboxArr) => {
  if(!Array.isArray(cashboxArr)) return 'Не массив';

  const arr = [...cashboxArr];
  const result = arr.reduce((sum, current) => sum + current, 0);

  return Math.floor(result / arr.length);
}

console.log(getAverageValue(allCashbox));
