const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line.split(" ").map((el) => parseInt(el)));
}).on("close", () => {
  const length = input.shift();
  let count = 0;
  
  for (let i = 0; i < length; i++) {
    let isPrime = true;
    if (input[0][i] < 2) {
      continue;
    }
    for (let j = 2; j < input[0][i]; j++) {
      if (input[0][i] % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      count++;
    }


  }

  console.log(count);
})