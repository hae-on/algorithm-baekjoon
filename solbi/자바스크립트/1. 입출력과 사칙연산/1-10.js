// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split(' ');
const sample = `5 8 4`; 
const input = sample.split(' ');
const A = parseInt(input[0]);
const B = parseInt(input[1]);
const C = parseInt(input[2]);
console.log((A+B)%C);
console.log(((A%C) + (B%C))%C);
console.log((A*B)%C);
console.log(((A%C) * (B%C))%C);