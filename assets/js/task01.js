'use strict';

const randomNumbersArr = quantity => [...new Array(quantity)]
.map( () => Math.floor( ( Math.random() * 100 + 1 ) ) );

console.log(randomNumbersArr(100));