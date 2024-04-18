const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(Number(line));
}).on("close", () => {
  let answer = "";
  for (let i = 1; i <= input[0]; i++) {
    answer += i + "\n";
  }
  console.log(answer);
});