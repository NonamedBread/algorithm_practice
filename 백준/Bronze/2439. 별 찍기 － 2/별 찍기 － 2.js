const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(Number(line));
}).on("close", function () {
  const length = input[0]
  for (let i = 1; i <= length; i++) {
    const star = " ".repeat(length-i).concat("*".repeat(i))
    console.log(star)
  }
  process.exit();
});
