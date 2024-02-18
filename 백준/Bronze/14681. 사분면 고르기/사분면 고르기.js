const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let list = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  list = input.map((el) => parseInt(el));
  solution(list);
  process.exit();
});

const solution = (input) => {
  let X = input[0];
  let Y = input[1];

  if (X > 0 && Y > 0) {
    console.log(1);
  }
  if (X < 0 && Y > 0) {
    console.log(2);
  }
  if (X < 0 && Y < 0) {
    console.log(3);
  }
  if (X > 0 && Y < 0) {
    console.log(4);
  }
};
