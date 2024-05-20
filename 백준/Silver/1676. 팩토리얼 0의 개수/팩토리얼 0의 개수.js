const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  function countTrailingZeros(N) {
    let count = 0;
    let i = 5;
    
    while (Math.floor(N / i) > 0) {
        count += Math.floor(N / i);
        i *= 5;
    }
    
    return count;
  }

console.log(countTrailingZeros(input[0]));
});