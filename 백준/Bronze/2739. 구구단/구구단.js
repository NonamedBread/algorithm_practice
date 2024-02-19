const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solution(Number(input[0]));
  process.exit();
});

const solution = (input) => {
  for (let i = 1; i <= 9; i++) {
    console.log(`${input} * ${i} = ${input * i}`);
  }
};
