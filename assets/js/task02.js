'use strict';

const randomNumbersArr2 = ( quantity, n, m ) => {
  const min = Math.min(n, m);
  const max = Math.max(n, m);

  return [...new Array(quantity)].map( () => Math.floor( ( Math.random() * ( max - min + 1 ) + min ) ) );
}

console.log(randomNumbersArr2(100, 50, -10));
