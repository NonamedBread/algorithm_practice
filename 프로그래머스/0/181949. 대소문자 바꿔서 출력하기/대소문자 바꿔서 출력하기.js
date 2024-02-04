const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    const str = input[0];
    const regex = /[a-zA-Z]/g;
    const convertedStr = str.replace(regex, function(match) {
        return match === match.toUpperCase() ? match.toLowerCase() : match.toUpperCase();
    });
    console.log(convertedStr);
});
