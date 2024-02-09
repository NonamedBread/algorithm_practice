const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let list = [];

rl
  .on("line", function (line) {
    input.push(line);
  })
  .on("close", function () {
    input.forEach((val) => {
      list.push(val.split(" ").map((el) => parseInt(el)));
    });

      solution(list);
    process.exit();
  });

const solution = (input) => {

  const [n, m] = input;
  let result = 0;
  const mArray = Array.from(String(m), Number).reverse().map((el) => {
    console.log(el * n)

    return el * n
  });

  mArray.forEach((el, idx) => {
    result += el * Math.pow(10, idx);
  })

  console.log(result)

}