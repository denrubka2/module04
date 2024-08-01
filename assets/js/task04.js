'use strict'

const allCashbox2 = [
  [12, 4500], 
  [7, 3210], 
  [4, 650], 
  [3, 1250], 
  [9, 7830], 
  [1, 990], 
  [6, 13900], 
  [1, 370]
];

const getAveragePriceGoods = (cashArr) => {
  const res = cashArr.reduce((acc, current) => [acc[0] + current[0], acc[1] + current[1]])
  .reduce((acc, value) => value / acc);

  return Math.floor(res);
}

console.log(getAveragePriceGoods(allCashbox2));