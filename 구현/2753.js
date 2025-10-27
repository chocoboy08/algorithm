const input = require("fs").readFileSync(
  process.platform === "linux" ? "/dev/stdin" : "./input.txt"
);

function solution(year) {
  if (year % 400 === 0) return 1;
  else if (year % 4 === 0 && year % 100 !== 0) return 1;
  return 0;
}

console.log(solution(input));
