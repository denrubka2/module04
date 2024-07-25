'use strict';

const isPrime = (number) => {
  if(number < 2) return false;

  if(number === 2) return true;

  for(let i = 2; i < number; i++) {
    if(number % i === 0) return false;
  }

  return true;
}

for(let i = -100, count = 0; i <= 1000; i++) {
  if(isPrime(i)) {
    console.log(`${++count}) Простое число - ${i}`);
  }
}
