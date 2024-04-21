const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line.split(" ").map((el) => parseInt(el)));
}).on("close", () => {
  for (let i = 0; i < input.length -1; i++) {
    let [a, b, c] = input[i].map((el) => el ** 2).sort((a, b) => a - b);
    const result = a + b === c ? "right" : "wrong";
    console.log(result);
  }
});