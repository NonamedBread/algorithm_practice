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
    let sum = input[i][0] + input[i][1];
    console.log(`Case #${i}: ${sum}`);
  }

  process.exit();
});
