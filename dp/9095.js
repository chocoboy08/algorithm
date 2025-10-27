const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const dp = {};
function solution(n) {
  if (dp[n] !== undefined) return dp[n];
  if (n < 0) return 0;
  if (n <= 1) return 1;
  dp[n] = solution(n - 1) + solution(n - 2) + solution(n - 3);

  return dp[n];
}

for (let i = 0; i < input[0]; i++) {
  console.log(solution(input[i + 1]));
}
