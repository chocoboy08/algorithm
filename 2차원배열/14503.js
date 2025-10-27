const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input[0].split(" ");
let [r, c, d] = input[1].split(" ").map(Number);
let room = input.slice(2).map((item) => item.split(" ").map(Number));

// 북동남서 순서대로 커진다.
// 북, 남을 바라볼 땐 y축이 늘어나거나 줄어듬
// 동, 서를 바라볼 땐 x축이 늘어나거나 줄어듬
// 청소된 칸은 2, 벽은 1로 채우면 될 것 같다.
// 주변 4칸 중 0이 있다면 0을 향해 회전하고 전진해서 청소
// 주변 4칸에 0이 없는 경우 현재 방향 그대로 후진, 다시 탐색
// 후진하려는 방향이 벽이라면 종료

function solution(room) {
  let answer = 0;
  let coordinate = { x: c, y: r, direction: d };
  while (room[coordinate.y][coordinate.x] !== 1) {
    let map = [
      room[coordinate.y - 1][coordinate.x],
      room[coordinate.y][coordinate.x + 1],
      room[coordinate.y + 1][coordinate.x],
      room[coordinate.y][coordinate.x - 1],
    ];

    if (room[coordinate.y][coordinate.x] === 0) {
      room[coordinate.y][coordinate.x] = 2;
      answer += 1;
    }
    if (map.some((item) => item === 0)) {
      if (coordinate.direction === 0) {
        coordinate.direction = 3;
        if (room[coordinate.y][coordinate.x - 1] === 0) {
          coordinate.x -= 1;
        }
      } else if (coordinate.direction === 1) {
        coordinate.direction = 0;
        if (room[coordinate.y - 1][coordinate.x] === 0) {
          coordinate.y -= 1;
        }
      } else if (coordinate.direction === 2) {
        coordinate.direction = 1;
        if (room[coordinate.y][coordinate.x + 1] === 0) {
          coordinate.x += 1;
        }
      } else if (coordinate.direction === 3) {
        coordinate.direction = 2;
        if (room[coordinate.y + 1][coordinate.x] === 0) {
          coordinate.y += 1;
        }
      }
    } else {
      if (coordinate.direction === 0) coordinate.y += 1;
      else if (coordinate.direction === 1) coordinate.x -= 1;
      else if (coordinate.direction === 2) coordinate.y -= 1;
      else if (coordinate.direction === 3) coordinate.x += 1;
    }
  }
  return answer;
}

console.log(solution(room));
