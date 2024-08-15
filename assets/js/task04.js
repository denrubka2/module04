'use strict'

const getLeapYear = (n, m) => {
  const leapYears = [];

  for (let i = Math.min(n, m); i < Math.max(n, m); i++) {
    if (i % 4 === 0 && i % 100 !== 0 || i % 400 === 0) {
      leapYears.push(i);
    }
  };

  return leapYears;
}

console.log(getLeapYear(2100, 2000));