const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line.split(" ").map((el) => el));
}).on("close", () => {
  const length = Number(input.shift());

  input.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < length; i++) {
    console.log(input[i].join(" "));
  }
});