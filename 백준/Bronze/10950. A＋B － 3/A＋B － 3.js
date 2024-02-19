const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solution(input.map((el) => el.split(" ")).map((el) => el.map(Number)));
  process.exit();
});

const solution = (input) => {
  const length = input[0];
  for (let i = 1; i <= length; i++) {
    const a = input[i][0];
    const b = input[i][1];
    console.log(a + b);
  }
};
