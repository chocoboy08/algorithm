const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let coordinate = input[0].split(" ");
let y = Number(coordinate[0]);
let x = Number(coordinate[1]);

let mat1 = input.slice(1, y + 1).map((item) => item.split(" ").map(Number));

let mat2 = input.slice(y + 1).map((item) => item.split(" ").map(Number));

function solution(mat1, mat2) {
  for (let i = 0; i < y; i++) {
    let line = [];
    for (let j = 0; j < x; j++) {
      line.push(mat1[i][j] + mat2[i][j]);
    }
    console.log(line.join(" "));
  }
}

solution(mat1, mat2);
