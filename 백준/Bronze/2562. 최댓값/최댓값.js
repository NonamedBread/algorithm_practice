const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(parseInt(line));
}).on("close", function () {
  let max = input[0];
  let index = 0;

  for (let i = 1; i < input.length; i++) {
    if (max < input[i]) {
      max = input[i];
      index = i;
    }
  }

  console.log(max);
  console.log(index + 1);

  process.exit();
});
