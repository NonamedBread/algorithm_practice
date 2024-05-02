const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line.split(" "));
}).on("close", () => {
  let [a, b] = input[0].map((el) => Number(el)).sort((a, b) => a - b);
  
  const gcd = (a, b) => {
    if (b === 0) {
      return a;
    } else {
      return gcd(b, a % b);
    }
  }
  const gcdValue = gcd(a, b);
  console.log(gcdValue);
  console.log(a * b / gcdValue);
})