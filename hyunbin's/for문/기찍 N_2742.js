const fs = require('fs');

// λ¬Έμ νλ
const input = fs.readFileSync("/dev/stdin").toString().split(" ");


let answer = "";


for (let i = Number(input); i >= 1; i--) {
    answer += i + "\n";
}

console.log(answer);




