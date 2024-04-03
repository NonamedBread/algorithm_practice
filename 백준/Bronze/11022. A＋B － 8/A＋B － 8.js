const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line.split(" ").map(Number));
}).on("close", function () {
  const length = input[0][0];

  for (let i = 1; i <= length; i++) {
    const num1 = input[i][0];
    const num2 = input[i][1];
    const sum = num1 + num2;
    console.log(`Case #${i}: ${num1} + ${num2} = ${sum}`);
  }

  process.exit();
});
