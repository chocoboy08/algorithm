const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N] = input[0].split(" ").map(Number);
const num = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

function solution() {
  let s = 0;
  let e = N - 1;
  let sum = 0;
  let answer = num[s] + num[e];
  let idx = [s, e];

  while (s < e) {
    sum = num[s] + num[e];
    if (Math.abs(sum) < Math.abs(answer)) {
      answer = sum;
      idx = [s, e];
    }
    if (sum < 0) {
      s++;
    } else if (sum > 0) {
      e--;
    } else {
      idx = [s, e];
      break;
    }
  }
  console.log(num[idx[0]], num[idx[1]]);
}

solution();
