const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(Number(line));
}).on("close", () => {
  const num = input[0];

  let block = 1;
  let range = 1;
  while (num > block) {
    block += 6 * range;
    range++;
  }

  console.log(range);
});