'use strict';

const convertEuroToRubles = (sum) => {
  const dollarPerEuro = 1.2;
  const rublePerDollar = 73;
  const rubles = sum * dollarPerEuro * rublePerDollar;

  return rubles;
}

console.log(convertEuroToRubles('25'));;