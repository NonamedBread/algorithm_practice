const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line.split(" ").map(Number));
}).on("close", function () {

  const basketLength = input[0][0];
  const basket = Array(basketLength).fill(0);

  input = input.slice(1);
  input.forEach((el) => {
    const startIdx = el[0]-1;
    const endIdx = el[1]-1;
    const num = el[2];

    for (let i = startIdx; i <= endIdx; i++) {
      basket[i] = num;
    }
  });
  console.log(basket.join(' '));


  process.exit();
});
