const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [R, C] = input[0].split(" ").map((item) => parseInt(item));

let map = new Array(R).fill("").map((item, idx) => input[idx + 1].split(""));

let count = 0;
let toChange = [];

map.forEach((item1, idx1) =>
  item1.map((item2, idx2) => {
    if (item2 === "X") {
      if (idx1 - 1 < 0 || map[idx1 - 1][idx2] === ".") count++;
      if (idx1 + 1 >= R || map[idx1 + 1][idx2] === ".") count++;
      if (idx2 - 1 < 0 || map[idx1][idx2 - 1] === ".") count++;
      if (idx2 + 1 >= C || map[idx1][idx2 + 1] === ".") count++;
      if (count < 3) toChange.push([idx1, idx2]);
    }
    count = 0;
  })
);

if (toChange.length <= 1) console.log("X");
else {
  let max = [0, 0];
  let min = [toChange[0][0], toChange[0][1]];
  toChange.forEach((item) => {
    if (item[0] > max[0]) max[0] = item[0];
    if (item[1] > max[1]) max[1] = item[1];
    if (item[0] < min[0]) min[0] = item[0];
    if (item[1] < min[1]) min[1] = item[1];
  });

  let line = [];
  let result = [];

  for (let i = min[0]; i <= max[0]; i++) {
    line = [];
    for (let j = min[1]; j <= max[1]; j++) {
      if (toChange.some((item) => item[0] === i && item[1] === j))
        line.push("X");
      else line.push(".");
    }
    result.push(line);
  }

  console.log(result.map((row) => row.join("")).join("\n"));
}
