function solution(d, budget) {
    let answer = 0;
    let sum = 0;
    const sortedArr = d.sort((a, b) => a - b); // 숫자 오름차순 정렬

    for (let i = 0; i < sortedArr.length; i++) {
        sum += sortedArr[i];
        if (sum > budget) {
            break;
        }
        answer++;
    }
    return answer;
}
