'use strict';

const nod = (a, b) => {
  let arrayA = [];
  let arrayB = [];
  let matched = [];

  if(a === 0 || b === 0) {
    return 'Одно из числе равно нулю';
  }

  for (let i = 0; i <= a; i++) {
    if(a % i === 0) {
      arrayA.push(i);
    }
  }

  for (let i = 0; i <= b; i++) {
    if(b % i === 0) {
      arrayB.push(i);
    }
  }
  
  matched = arrayA.filter(item => {
    return arrayB.indexOf(item) > -1;
  });

  return matched[matched.length - 1];
}

console.log(nod(80, 56));;