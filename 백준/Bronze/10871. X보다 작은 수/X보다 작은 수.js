const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line.split(" ").map((el) => el));
}).on("close", function () {
  const n = input[0][1];
  const arr = input[1].map((el) => parseInt(el));
  const result = [];

  for (const num of arr) {
    if (num < n) {
      result.push(num);
    }
  }

  console.log(result.join(" "));

  process.exit();
});
