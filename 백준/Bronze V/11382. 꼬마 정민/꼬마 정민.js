const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const result = solution(input);
  console.log(result);
  process.exit();
});

const solution = (input) => {
  result = input[0]
    .split(" ")
    .map((el) => Number(el))
    .reduce((acc, cur) => acc + cur, 0);

  return result;
};