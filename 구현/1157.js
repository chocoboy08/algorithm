const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

function solution(input) {
  if (input.length === 0) return "?";
  const upper = input.toUpperCase().split(" ").join("").split("");
  const alpha = {};

  let count = 0;
  let dup = 0;
  let idx = 0;
  upper.forEach((item) => {
    alpha[item] = alpha[item] ? alpha[item] + 1 : 1;
    count = Math.max(count, alpha[item]);
  });
  const key = Object.keys(alpha);
  const value = Object.values(alpha);

  for (let i = 0; i < value.length; i++) {
    if (value[i] === count) {
      idx = i;
      dup += 1;
    }
  }
  if (dup > 1) return "?";
  return key[idx];
}

console.log(solution(input));
