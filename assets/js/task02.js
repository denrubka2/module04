'use strict';

const arrFoo = (arr = []) => {
  arr.push(Math.round(Math.random() * 10));

  const sum = arr.reduce((acc, current) => acc + current, 0);

  if (sum < 50) arrFoo(arr);

  return arr;
};

console.log(arrFoo([1, 2]));
