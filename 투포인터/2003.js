const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const num = input[1].split(" ").map(Number);

function solution() {
  let start = 0;
  let end = 0;
  let count = 0;
  let sum = 0;
  while (end <= N) {
    if (sum < M) sum += num[end++];
    else if (sum > M) sum -= num[start++];
    else {
      count++;
      sum -= num[start++];
    }
  }
  console.log(count);
}

solution();
