'use strict'

import listIPv4 from './ip.js';

const countUniqueIp = (arrIp) => new Set(arrIp).size;

console.log(countUniqueIp(listIPv4));