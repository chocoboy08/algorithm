const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const M = Number(input[1]);
const num = input[2]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

function solution() {
  let count = 0;
  let left = 0,
    right = num.length - 1;
  while (left < right) {
    let sum = num[left] + num[right];
    if (sum === M) {
      count++;
      left++;
      right--;
    }
    if (sum < M) left++;
    if (sum > M) right--;
  }
  console.log(count);
}

solution();
