'use strict';

const arrFoo = (arr = []) => {
  const array = [...arr];
  const sum = array.reduce((acc, current) => acc + current, 0);

  if (sum < 50) {
    array.push(Math.round(Math.random() * 10));
    return arrFoo(array);
  }

  return array;
};

console.log(arrFoo([1]));
