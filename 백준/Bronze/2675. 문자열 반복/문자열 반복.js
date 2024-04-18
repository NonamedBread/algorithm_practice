const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line.split(" "));
}).on("close", () => {
  const length = input.length;

  for (let i = 0; i < length; i++) {
    const [a, b] = input.shift();
    if (b === undefined) continue;

    const wordLength = b.length;
    const newWord = [];
    for (let j = 0; j < wordLength; j++) {
      newWord.push(b[j].repeat(a));
    }
    console.log(newWord.join(""));
  }
});