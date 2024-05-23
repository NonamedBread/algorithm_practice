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

while(arr.length > 0){
  for(let i = 0; i < number - 1; i++){
    arr.push(arr.shift());
  }
  result.push(arr.shift());
}
console.log(`<${result.join(', ')}>`);
});