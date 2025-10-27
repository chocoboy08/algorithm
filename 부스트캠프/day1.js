const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const H = input[0][0];
const W = input[0][1];
const N = input[1][0];

const stickers = [];
for (let i = 2; i < 2 + N; i++) stickers.push([input[i][0], input[i][1]]);
