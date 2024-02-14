const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let list = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  list = input[0].split(" ").map((el) => parseInt(el));

  const result = solution(list);
  console.log(result);
  process.exit();
});

const solution = (input) => {
  let result = 0;

  for (let i = 0; i < input.length; i++) {
    result += input[i];
  }
  return result;
};