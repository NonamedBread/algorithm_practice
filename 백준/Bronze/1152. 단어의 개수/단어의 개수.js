const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line.split(" ").filter((el) => el !== ""));
}).on("close", () => {
  console.log(input[0].length);
});