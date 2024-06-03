function solution(s) {
    return /^\d+$/.test(s) && [4, 6].includes(s.length);
}