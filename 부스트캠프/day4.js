const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, K] = input[0].split(" ").map((item) => parseInt(item));

let list = input[1].split("");

let count = 0;

list.map((item, idx) => {
  if (item === "P") {
    for (let i = idx - K; i <= idx + K; i++) {
      if (list[i] === "H") {
        list[i] = null;
        count++;
        break;
      }
    }
  }
});

console.log(count);
