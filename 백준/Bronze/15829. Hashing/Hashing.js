const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line.split(" "));
}).on("close", () => {
  const length = Number(input[0][0]);
  const strArr = input[1][0].toUpperCase().split('');
  const r = BigInt(31); 
  const M = BigInt(1234567891);
  let sum = BigInt(0);

  for (let i = 0; i < length; i++) {
    const charValue = BigInt(strArr[i].charCodeAt(0) - 64);
    sum = (sum + (charValue * (r ** BigInt(i)))) % M;
  }
  console.log(sum.toString());
});