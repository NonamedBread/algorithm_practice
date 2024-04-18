const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line.split(" ").map(Number));
}).on("close", () => {
  const [N, M] = input.shift();
  const base = Array.from({ length: N },(_,i) => i + 1);
  
  for (let i = 0; i < M; i++) {
    const [a, b] = input[i];
    let part = base.slice(a - 1, b).reverse();
    base.splice(a - 1, b - a + 1, ...part);
  }
  console.log(...base);
});