// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split(' ');
const sample = `1 2`; 
const input = sample.split(' ');

const A = parseInt(input[0]);
const B = parseInt(input[1]);

if (A > B) {
    console.log('>');
} else if (A < B) {
    console.log('<');
} else {
    console.log('==');
}