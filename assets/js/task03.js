'use strict';

const randomNumbersArr3 = ( quantity, n, m, type ) => {
  const arr = [...new Array(quantity)];

  if(type === 'even') {
    return arr.map( () => {
      const num = Math.floor((Math.random() * ( Math.max(n, m) - Math.min(n, m)) + Math.min(n, m)));

      return num % 2 === 0 ? num : num + 1;
    });
  }

  if(type === 'odd') {
    return arr.map( () => {
      const num = Math.floor((Math.random() * ( Math.max(n, m) - Math.min(n, m)) + Math.min(n, m) + 1));

      return num % 2 !== 0 ? num : num - 1;
    });
  }

};

console.log(randomNumbersArr3(100, 50, -10, 'even'));