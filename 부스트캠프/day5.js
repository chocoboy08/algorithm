const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let n = input[0];
let H = input[1].split(" ").map((item) => parseInt(item));
let A = input[2].split(" ");

const index = A.map((item, idx) => [parseInt(item), idx]).sort(
  (a, b) => a[0] - b[0]
);

let result = 0;

index.forEach((item, idx) => {
  H[item[1]] += item[0] * idx;
  result += H[item[1]];
});

console.log(result);
