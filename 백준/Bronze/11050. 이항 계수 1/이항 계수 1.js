const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line.split(" ").map((el) => parseInt(el)));
}).on("close", () => {
  const [n, m] = input[0];
  let result = 1;

  for (let i = 0; i < m; i++) {
    result *= (n - i) / (i + 1);
  }

  console.log(result);
});