'use strict';

const allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

const getAverageValue = (cashboxArr) => Math.floor(cashboxArr.reduce((sum, current) => sum + current, 0) / cashboxArr.length);

console.log(getAverageValue(allCashbox));
