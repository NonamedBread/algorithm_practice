const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line.split(" ").map(Number));
}).on("close", function () {
  let output = "";
  const count = input[0][0];
  for (let i = 1; i <= count; i++) {
    output += input[i][0] + input[i][1] + "\n";
  }
  console.log(output);
  process.exit();
});
