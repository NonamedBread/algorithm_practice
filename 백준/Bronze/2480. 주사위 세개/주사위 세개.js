const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solution(input[0].split(" ").map(Number));
  process.exit();
});

const solution = (input) => {
  let diceCount = new Map();
  let prize = 0;

  for (let i = 0; i < input.length; i++) {
    if (diceCount.has(input[i])) {
      diceCount.set(input[i], diceCount.get(input[i]) + 1);
    } else {
      diceCount.set(input[i], 1);
    }
  }

  let maxEye = Math.max(...input);
  let maxCount = Math.max(...Array.from(diceCount.values()));
  let maxCountEye = 0;

  for (let [key, value] of diceCount) {
    if (value === maxCount) {
      maxCountEye = key;
    }
  }

  if (maxCount === 3) {
    prize = 10000 + maxCountEye * 1000;
  } else if (maxCount === 2) {
    prize = 1000 + maxCountEye * 100;
  } else {
    prize = maxEye * 100;
  }

  console.log(prize);
};
