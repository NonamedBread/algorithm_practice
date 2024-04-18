const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const length = input.shift();
  for (let i = 0; i < length; i++) {
    const arr = input.shift()
    const lastIndex = arr.length - 1;
    const result = arr[0] + arr[lastIndex];
    console.log(result);
  }
});