'use strict';

const nod = (a, b) => {
  if(b === 0) {
      return a;
  }
  
  return nod(b, a % b);
}

console.log('nod: ' + nod(8, 14));