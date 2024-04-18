const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const word = input[0];

  const result = [...alphabet].map(char => word.indexOf(char));

  console.log(...result);
});