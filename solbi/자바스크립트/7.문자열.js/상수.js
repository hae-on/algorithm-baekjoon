// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const sample = `734 893`;
const input = sample.split(" ");
let num1 = input[0].split("").reverse().join("");
let num2 = input[1].split("").reverse().join("");

console.log(num1); //437
console.log(num2); //398

console.log(Math.max(num1, num2));
