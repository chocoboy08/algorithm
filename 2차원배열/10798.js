const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.split(""));

function solution(input) {
  let answer = "";
  let i = Array(5)
    .fill(null)
    .map((_, idx) => idx);
  let count = 0;
  while (i.length !== 0) {
    if (count >= i.length) count = 0;
    if (input[i[count]].length === 0) {
      i = i.filter((item) => item !== i[count]);
    } else {
      answer += input[i[count]][0];
      input[i[count]].shift();
      count++;
    }
  }
  return answer;
}

console.log(solution(input));
