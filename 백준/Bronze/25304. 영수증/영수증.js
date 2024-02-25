const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  let array = line.split(" ").map(Number);
  input.push(array);
}).on("close", function () {
  solution(input);
  process.exit();
});

const solution = (input) => {
  const totalsum = input[0][0];
  const totalLength = input[1][0];

  let sum = 0;
  let length = 0;

  for (let i = 2; i < input.length; i++) {
    sum += input[i][0] * input[i][1];
    length += 1;
  }

  if (sum === totalsum && length === totalLength) {
    console.log("Yes");
  } else {
    console.log("No");
  }
};
