const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line.split(" ").map((el) => parseInt(el)));
}).on("close", function () {
  let max = input[1][0];
  let min = input[1][0];
  const arr = input[1];

  for (const num of arr) {
    num > max ? (max = num) : num < min ? (min = num) : null;
  }

  console.log(min, max);

  process.exit();
});
