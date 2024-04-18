const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  input.shift();
  const sum = input[0].split('').reduce((acc, curr) => acc + Number(curr), 0);
  console.log(sum);
});