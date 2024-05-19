const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const disaster = Number(input[0]);
  let count = 0;
  for (let i = 666; ; i++) {
    if (i.toString().includes('666')) {
      count++;
    }
    if (count === disaster) {
      console.log(i);
      break;
    }
  }
});