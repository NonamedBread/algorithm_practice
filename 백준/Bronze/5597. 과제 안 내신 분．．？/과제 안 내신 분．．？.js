const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line.split(" ").map(Number));
}).on("close", function () {
  const checkNumber = Array.from({ length: 30 }, (_,i) => i+1);
  const result = checkNumber.filter((num) => input.every((arr) => arr.includes(num) === false));
  result.forEach((num) => console.log(num));
});
