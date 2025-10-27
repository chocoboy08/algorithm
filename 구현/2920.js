const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .split(" ")
  .map((item) => {
    return parseInt(item);
  });

function solution(input) {
  if (input[0] === 1) {
    for (let i = 1; i <= 8; i++) {
      if (input[i - 1] !== i) return "mixed";
      if (i === 8) return "ascending";
    }
  } else if (input[0] === input.length) {
    for (let i = 8; i >= 1; i--) {
      if (input[input.length - i] !== i) return "mixed";
      if (i === 1) return "descending";
    }
  } else return "mixed";
}

console.log(solution(input));
