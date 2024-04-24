const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(Number(line));
}).on("close", () => {
  const N = input[0];
  let result = 0;

  for (let i = 1; i < N; i++) {
    const numArr = i.toString().split('').map(Number);
    const sum = i + numArr.reduce((acc, cur) => acc + cur, 0);

    if (sum === N) {
      result = i;
      break;
    }
  }
  console.log(result);
})