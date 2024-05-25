function solution(x) {
    const sumOfDigits = String(x).split('').reduce((a, b) => a + Number(b), 0);
    return x % sumOfDigits === 0;
}
