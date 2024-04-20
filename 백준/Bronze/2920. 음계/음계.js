const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const arr = input.shift().split(" ").map(Number);
  let answer = 0;
  arr.reduce((acc, cur) => {
    if (acc < cur) {
      answer++;
    }
    if (acc > cur) {
      answer--;
    }
    return cur;
  });
  console.log(answer === 7 ? "ascending" : answer === -7 ? "descending" : "mixed");
});