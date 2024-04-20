const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line.split(" ").map(Number));
}).on("close", () => {
  let sum = 0;

input[0].forEach((el) => {
    sum += el * el;
});

  console.log(sum % 10);
});