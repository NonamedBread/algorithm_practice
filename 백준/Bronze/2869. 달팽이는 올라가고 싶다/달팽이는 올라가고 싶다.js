const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line.split(" ").map((el) => parseInt(el)));
}).on("close", () => {
  const [a, b, v] = input[0];
  const day = Math.ceil((v - b) / (a - b));
  console.log(day);
});