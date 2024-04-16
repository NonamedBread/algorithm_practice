const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line.split(" ").map(Number));
}).on("close", function () {
  const [N, M] = input.shift();
  const basket = Array.from({length: N}, (_, i) => i + 1);

  for (let i = 0; i < M; i++) {
    const [a, b] = input[i];
    [basket[a - 1], basket[b - 1]] = [basket[b - 1], basket[a - 1]];
  }
  console.log(...basket);
});
