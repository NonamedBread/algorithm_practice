const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let list = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  list = input[0].split(" ").map(Number);
  solution(list);
  process.exit();
});

const solution = (input) => {
  let time = 0;
  let hour = input[0];
  let minute = input[1];

  time = hour * 60 + minute - 45;

  hour = Math.floor(time / 60);
  minute = time < 0 ? time + 60 : time % 60;

  console.log(hour < 0 ? 23 : hour, minute);
};
