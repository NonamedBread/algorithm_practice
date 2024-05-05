const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(Number(line));
}).on("close", () => {
  const arr = input.slice(1);
  const floorArr = arr.filter((value, index) => index % 2 === 0);
  const roomArr = arr.filter((value, index) => index % 2 !== 0);

  const dp = Array.from({ length: 15 }, () => Array(15).fill(0));

  for (let i = 0; i < 15; i++) {
    dp[0][i] = i;
    dp[i][1] = 1;
  }

  for (let i = 1; i < 15; i++) {
    for (let j = 2; j < 15; j++) {
      dp[i][j] = dp[i][j - 1] + dp[i - 1][j];
    }
  }

  for (let i = 0; i < arr.length / 2; i++) {
    console.log(dp[floorArr[i]][roomArr[i]]);
  }
});