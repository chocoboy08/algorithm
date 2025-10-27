const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const switches = input[1].split(" ").map((item) => +item);
const students = input
  .slice(3)
  .map((item) => item.split(" ").map((char) => +char));

function solution(n, switches, students) {
  students.forEach((student) => {
    if (student[0] === 1) {
      for (let i = 1; i < n / student[1]; i++) {
        switches[i * student[1] - 1] = +!switches[i * student[1] - 1];
      }
    } else {
      switches[student[1] - 1] = +!switches[student[1] - 1];
      for (
        let i = 1;
        i < (student[1] > n / 2 ? n - student[1] + 1 : student[1]);
        i++
      ) {
        if (switches[student[1] - 1 - i] === switches[student[1] - 1 + i]) {
          switches[student[1] - 1 - i] = +!switches[student[1] - 1 - i];
          switches[student[1] - 1 + i] = +!switches[student[1] - 1 + i];
        } else break;
      }
    }
  });

  if (n > 20) {
    let slice = [];
    for (let i = 0; i <= (n - 1) / 20; i++) {
      slice.push(switches.slice(i * 20, (i + 1) * 20).join(" "));
    }
    return slice.join("\n");
  }
  return switches.join(" ");
}

console.log(solution(input[0], switches, students));
