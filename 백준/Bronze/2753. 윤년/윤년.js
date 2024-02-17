const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solution(input);
  process.exit();
});

const solution = (input) => {
  const N = parseInt(input[0]);

  if (N % 4 === 0 && (N % 100 !== 0 || N % 400 === 0)) {
    console.log(1);
  } else {
    console.log(0);
  }
};
