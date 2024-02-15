const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let list = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  list = input[0].split(" ").map((el) => Number(el));
  solution(list);
  process.exit();
});

const solution = (input) => {
  const a = input[0];
  const b = input[1];

  if (a > b) {
    console.log(">");
  } else if (a < b) {
    console.log("<");
  } else {
    console.log("==");
  }

  return;
};
