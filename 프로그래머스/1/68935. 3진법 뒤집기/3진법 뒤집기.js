function solution(n) {
    let reversedBase3 = '';

    while (n !== 0) {
        reversedBase3 += (n % 3).toString();
        n = Math.floor(n / 3);
    }

    return parseInt(reversedBase3, 3);
}
