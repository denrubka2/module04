'use strict';

const firstLetterToUpperCase = (str) => {
  const endStr = str.substring(1).toLowerCase();
  const startStr = str[0].toUpperCase();

  return startStr + endStr;
}

console.log(firstLetterToUpperCase('привеТ мИр!'));
