function solution(a, b, n) {
    let answer = 0;

    while (n >= a) {
        let quotient = Math.floor(n / a);
        let newBottles = quotient * b;
        answer += newBottles;
        n = n - quotient * a + newBottles;
    }

    return answer;
}
