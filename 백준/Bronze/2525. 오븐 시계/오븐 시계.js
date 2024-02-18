const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let list = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  list = input.map((el) => el.split(" ").map((el) => parseInt(el)));
  solution(list);
  process.exit();
});

const solution = (input) => {
  let time = input[0][0] * 60 + input[0][1] + input[1][0];
  let hour = Math.floor(time / 60);
  let minute = time % 60;

  if (hour >= 24) {
    hour -= 24;
  }

  console.log(hour, minute);
};
