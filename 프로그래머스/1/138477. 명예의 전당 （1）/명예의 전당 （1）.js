function solution(k, score) {
    let answer = [];
    let hallOfFame = [];

    for (let i = 0; i < score.length; i++) {
        // 새로운 점수를 명예의 전당에 추가합니다.
        hallOfFame.push(score[i]);
        // 명예의 전당 목록을 정렬합니다.
        hallOfFame.sort((a, b) => b - a); // 내림차순 정렬

        // 명예의 전당 목록의 크기를 k로 유지합니다.
        if (hallOfFame.length > k) {
            hallOfFame.pop();
        }

        // 현재 명예의 전당의 최하위 점수를 추가합니다.
        answer.push(hallOfFame[hallOfFame.length - 1]);
    }

    return answer;
}
