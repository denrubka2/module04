'use strict';

const names = ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

const addPrefix = (namesArr, prefix) => {
  if(!Array.isArray(namesArr)) return 'Не массив';

  const arr = [...namesArr];
  const result = arr.map(item => `${prefix} ${item}`);

  return result;
}

console.log(addPrefix(names, 'Mr'));