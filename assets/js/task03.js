'use strict';

const randomNumbersArr3 = ( quantity, n, m, type ) => {
  const result = [];
  const rule = ['even', 'odd'].indexOf(type);
  const min = Math.min(n, m);
  const max = Math.max(n, m);

  for(let i = 0; i < quantity; i++) {
    let num = Math.floor((Math.random() * ( max - min ) + min ));

    if(rule !== -1 && (Math.abs(num) % 2) !== rule) {
      num++;
    }

    result.push(num);
  }

  return result;
};

console.log(randomNumbersArr3(100, 51, -11));