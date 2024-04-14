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

  const result = input.reduce(
    (max, curr, i) => {
      return curr > max.value ? { value: curr, index: i } : max;
    },
    { value: -Infinity, index: -1 }
  );

  console.log(result.value); // 최대값
  console.log(result.index + 1); // 인덱스 (1-based)

  process.exit();
});
