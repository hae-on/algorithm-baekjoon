let fs = require("fs")

// λ¬Έμ νλ
let input = fs.readFileSync("/dev/stdin").toString().split(" ")


let answer = "";


for (let i = 1; i <= input; i++) {
    answer += i + "\n";
}

console.log(answer);







