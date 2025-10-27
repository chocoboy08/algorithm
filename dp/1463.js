const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

const num = Number(input);

const dp = Array.from({ length: num + 1 }, () => 0);
function solution(n) {
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + 1;
    if (i % 2 === 0) dp[i] = Math.min(dp[i / 2] + 1, dp[i]);
    if (i % 3 === 0) dp[i] = Math.min(dp[i / 3] + 1, dp[i]);
  }
  return dp[n];
}
console.log(solution(num));
