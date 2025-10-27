const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const num = parseInt(input[0]);
const dices = [];

for (let i = 1; i <= num; i++) {
  const dice = input[i].split(" ").map((item) => parseInt(item));
  dices.push([
    [dice[0], dice[5]],
    [dice[1], dice[3]],
    [dice[2], dice[4]],
  ]);
}

let sum = new Array(6).fill(0);
const findNext = (order, prevNum, sumIdx) => {
  console.log(dices[order]);
  console.log(`sum${sumIdx}: `, sum[sumIdx]);
  console.log("order", order);
  dices[order].forEach((item) => {
    if (item[0] === prevNum) {
      console.log(item[1]);
      if (order >= num - 1) {
        sum[sumIdx] += item[1];
      } else {
        sum[sumIdx] += item[1];
        findNext(++order, item[1], sumIdx);
      }
    } else if (item[1] === prevNum) {
      console.log(item[0]);

      if (order >= num - 1) {
        sum[sumIdx] += item[0];
      } else {
          sum[sumIdx] += item[0];
          findNext(++order, item[0], sumIdx);
        }
    }
  });
};

for (let i = 1; i <= 6; i++) {
  sum[i - 1] += i;
  findNext(0, i, i - 1);
}
console.log(sum);
