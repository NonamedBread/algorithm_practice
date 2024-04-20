const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push((line.toLowerCase()));
}).on("close", () => {
  const str = input.shift().split("");
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("")
  const KeyValueAlphabet = {};

  alphabet.forEach((el) => {
    KeyValueAlphabet[el] = 0;
  });

  str.map((el) => {
    KeyValueAlphabet[el] += 1;
  })


  const max = Math.max(...Object.values(KeyValueAlphabet));
  const maxKey = Object.keys(KeyValueAlphabet).filter((key) => KeyValueAlphabet[key] === max);

  console.log(maxKey.length > 1 ? "?" : maxKey[0].toUpperCase());
});