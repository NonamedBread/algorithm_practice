const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const length = input.shift();

  for(let i = 0; i < length; i++) {
    let score = 0;
    const OX = input[i].split('X');
    for(let j = 0; j < OX.length; j++) {
      score += (OX[j].length) * (OX[j].length + 1) / 2;
    }
    console.log(score);
  }
});