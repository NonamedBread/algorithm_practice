const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line.split(" "));
}).on("close", () => {
  input.forEach(([a, b]) => {
    if (b === undefined) return;

    const newWord = [...b].map(char => char.repeat(a)).join("");
    console.log(newWord);
  });
});