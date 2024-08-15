'use strict';

const randomNumbersArr2 = ( quantity, n, m ) => [...new Array(quantity)]
.map( () => Math.floor( ( Math.random() * ( Math.max(n, m) - Math.min(n, m) + 1 ) + Math.min(n, m) ) ) );

console.log(randomNumbersArr2(100, 50, -10));
