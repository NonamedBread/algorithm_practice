const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line.split(" ").map(Number));
}).on("close", () => {
  const length = input[0][0];
  const scores = input[1];
  const max = Math.max(...scores);

  const sum = scores.reduce((acc, cur) => acc + (cur / max) * 100, 0);
  const average = sum / length;

  console.log(average);
});