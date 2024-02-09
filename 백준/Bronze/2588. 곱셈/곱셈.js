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

      solution(list);
    process.exit();
  });

const solution = (input) => {

  const [n, m] = input;
  Array.from(String(m), Number).reverse().map((el) => {
    console.log(el * n)
  });

  console.log(n * m)
}
