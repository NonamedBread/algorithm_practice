const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(Number(line));
}).on("close", function () {
  solution(input);
  process.exit();
});

const solution = (input) => {
  const count = Math.floor(input[0] / 4);
  let sol = "";

  for (let i = 1; i <= count; i++) {
    sol += "long ";
  }
  sol += "int";

  console.log(sol);
};
