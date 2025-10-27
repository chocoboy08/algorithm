const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = parseInt(input[0]);
const votes = input[2].split(" ").map((item) => parseInt(item));

let frames = [];
let toChange = -1;

votes.forEach((item, idx) => {
  toChange = frames.findIndex((element) => element[0] === item);
  if (toChange >= 0) frames[toChange][1] += 1;
  else {
    if (frames.length < N) frames.push([item, 1, idx]);
    else {
      frames.shift();
      frames.push([item, 1, idx]);
    }
  }
  frames.sort((a, b) => {
    if (a[1] !== b[1]) return a[1] - b[1];
    else return a[2] - b[2];
  });
});
frames.sort((a, b) => a[0] - b[0]);

let result = frames.map((item) => item[0]).join(" ");
console.log(result);
