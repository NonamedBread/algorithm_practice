const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line.split(" ").map((el) => el));
}).on("close", function () {

  const text = input[0][0];
  const index = input[1][0];

  const char = text.charAt(index-1);

  console.log(char);
  
  process.exit();
});
