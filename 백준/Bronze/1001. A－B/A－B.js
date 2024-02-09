const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl
  .on("line", function (line) {
    input = line.split(" ").map((el) => parseInt(el));
  })
  .on("close", function () {
    solution(input);
    process.exit();
  });

const solution = (input) => {
  const A = parseInt(input[0]);
  const B = parseInt(input[1]);
    console.log(A - B);
}
