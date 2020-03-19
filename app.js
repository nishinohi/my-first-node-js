`use strict`;

const number = process.argv[2] || 0;
let sum = 0;
for (let ii = 0; ii <= number; ++ii) { sum += ii; }
console.log(sum);