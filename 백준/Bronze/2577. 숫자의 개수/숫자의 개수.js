const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line.split(" ").map(Number));
}).on("close", () => {
  const [a, b, c] = input;
  const num = Array(10).fill(0);
  sum = a * b * c ;


  sum.toString().split("").forEach(digit => {
    num[digit]++;
  });

  num.forEach(n => {
    console.log(n);
  });
});