const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const seats = input[0].split(" ").map((item) => parseInt(item));
let [C, R] = seats;

const K = parseInt(input[1]);

let count = 0;
let round = 1;

let i = 1,
  j = 0;
if (K > C * R) console.log(0);
else {
  C -= 1;
  while (1) {
    if (i - (round + 1) === C && j - round === R)
      for (let a = 0; a < R; a++) {
        j--;
        count++;
        if (count === K) break;
      }
    else
      for (let a = 0; a < R; a++) {
        j++;
        count++;
        if (count === K) break;
      }
    if (count === K) break;
    if (i - (round + 1) === C && j === round)
      for (let b = 0; b < C; b++) {
        i--;
        count++;
        if (count === K) break;
      }
    else
      for (let b = 0; b < C; b++) {
        i++;
        count++;
        if (count === K) break;
      }
    if (count === K) break;
    if (i === round + 1 && j === round) {
      round++;
    }
    C--;
    R--;
  }
  console.log(i, j);
}
