const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

function solution(n) {
  let count = 0;
  let sum = 0;
  let left = 1,
    right = 1;

  while (right <= n) {
    sum += right;

    // sum이 n보다 크면 left 증가
    while (sum > n) {
      sum -= left;
      left++;
    }

    // sum이 n과 같으면 카운트
    if (sum === n) {
      count++;
    }

    right++;
  }
  console.log(count);
}

solution(Number(input));
