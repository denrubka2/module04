'use strict';

const convertEuroToRubles = (sum) => {
  const dollarPerEuro = 1.2;
  const rublePerDollar = 73;

  return sum * dollarPerEuro * rublePerDollar;
}

console.log(convertEuroToRubles('25'));;