const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line.split(" ").map((el) => el));
}).on("close", function () {
  const arr = input[1].map((el) => parseInt(el));
  const findNum = parseInt(input[2][0]);
  let count = 0;

  arr.map((el, idx) => {
    if (el === findNum) {
      count++;
    }
  });

  console.log(count);

  process.exit();
});
