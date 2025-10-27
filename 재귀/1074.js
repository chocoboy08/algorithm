const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .split(" ");

let [n, r, c] = input;

function solution(r, c, n) {
  if (n === 0) return 0;
  if (n === 1) {
    return (r % 2) * 2 + (c % 2);
  }
  const half = 2 ** (n - 1);
  const area = half * half;

  if (r < half && c < half) {
    return 0 + solution(r, c, n - 1);
  } else if (r < half && c >= half) {
    return area + solution(r, c - half, n - 1);
  } else if (r >= half && c < half) {
    return 2 * area + solution(r - half, c, n - 1);
  } else {
    return 3 * area + solution(r - half, c - half, n - 1);
  }
}

console.log(solution(+r, +c, +n));
