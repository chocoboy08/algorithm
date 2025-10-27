const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const n = input[0];
let papers = input.slice(1).map((item) => item.split(" ").map(Number));
let arr = Array(100)
  .fill(null)
  .map(() => Array(100).fill(0));

function solution(papers) {
  let answer = 0;
  papers.forEach((item) => {
    for (let x = item[0]; x < item[0] + 10; x++) {
      for (let y = item[1]; y < item[1] + 10; y++) {
        if (!arr[x][y]) {
          arr[x][y] = 1;
          answer += 1;
        }
      }
    }
  });
  return answer;
}

console.log(solution(papers));
