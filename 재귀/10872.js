const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString();

let n = parseInt(input);

let solution = function (n) {
  if (n <= 1) return 1;
  return n * solution(n - 1);
};

console.log(solution(n));
