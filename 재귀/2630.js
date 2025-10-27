const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .split("\n");

let n = input[0];

let paper = [];

for (let i = 1; i <= n; i++) {
  paper.push(input[i].split(" "));
}

let count = { 0: 0, 1: 0 };

function solution(x, y, n) {
  let isSame = true;
  for (let j = y; j < y + n; j++) {
    for (let k = x; k < x + n; k++) {
      if (paper[y][x] !== paper[j][k]) {
        isSame = false;
        break;
      }
    }
    if (!isSame) break;
  }

  if (isSame) {
    count[paper[y][x]] += 1;
    return;
  }
  solution(x, y, n / 2);
  solution(x + n / 2, y, n / 2);
  solution(x, y + n / 2, n / 2);
  solution(x + n / 2, y + n / 2, n / 2);
}

solution(0, 0, n);
console.log(count["0"]);
console.log(count["1"]);
