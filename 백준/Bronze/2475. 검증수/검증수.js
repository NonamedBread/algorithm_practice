const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line.split(" ").map(Number));
}).on("close", () => {
  const sum = input[0].reduce((acc, cur) => acc + cur * cur, 0);

  console.log(sum % 10);
});