'use strict';

const names = ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

const addPrefix = (namesArr, prefix) => namesArr.map(item => `${prefix} ${item}`);

console.log(addPrefix(names, 'Mr'));