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
    while (b !== 0) {
      let r = a % b;
      a = b;
      b = r;
    }
    return a;
  }
  const gcdValue = gcd(a, b);
  console.log(gcdValue);
  console.log(a * b / gcdValue);
})