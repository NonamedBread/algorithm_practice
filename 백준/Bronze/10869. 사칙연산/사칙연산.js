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
  const A = parseInt(input[0]);
  const B = parseInt(input[1]);
    console.log(A + B);
    console.log(A - B);
    console.log(A * B);
    console.log(Math.floor(A / B));
    console.log(A % B);
}