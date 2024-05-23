const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line.split(" ").map((el) => Number(el)));
}).on("close", () => {
  const length = input[0][0];
  const number = input[0][1];

  let arr = Array.from({length: length}, (v,i) => i + 1);
  let result = [];
  let index = 0;

  while(arr.length > 0){
    index = (index + number - 1) % arr.length;
    result.push(arr[index]);
    arr.splice(index, 1);
  }

  console.log(`<${result.join(', ')}>`);
});