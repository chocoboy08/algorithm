const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

function solution(str) {
  if (str.length === 0) return 0;
  return str.split(" ").length;
}

console.log(solution(input));
