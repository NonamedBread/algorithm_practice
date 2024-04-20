const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line.split(" "));
}).on("close", () => {
  const length = input.shift()[0]
  const str = input.shift()[0].split('').map((el) => el.toUpperCase());
  let result = 0;

  for (let i = 0; i < length; i++) {
    result += (str[i].charCodeAt()-64) * (31 ** i);
  }
  console.log(result);
});