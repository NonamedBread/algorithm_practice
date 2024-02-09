const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let list = [];

rl
  .on("line", function (line) {
    input.push(line);
  })
  .on("close", function () {
    input.forEach((val) => {
      list.push(val.split(" ").map((el) => parseInt(el)));
    });
    list.map((el) => {
      solution(el);
    });
    process.exit();
  });

const solution = (input) => {
  const text  = input - 543;
  console.log(`${text}`);
}