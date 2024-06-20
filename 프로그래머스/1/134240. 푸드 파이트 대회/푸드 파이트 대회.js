function solution(food) {
    let answer = '';
    const foodCounts = food.slice(1).map(count => Math.floor(count / 2)); // 각 음식의 절반 개수 계산

    // '1', '2', '3', ... 순서대로 반복 문자열 생성
    foodCounts.forEach((count, index) => {
        answer += (index + 1).toString().repeat(count);
    });

    answer += '0'; // 중앙에 물을 추가

    // 역순으로 다시 반복 문자열 추가
    foodCounts.reverse().forEach((count, index) => {
        answer += (foodCounts.length - index).toString().repeat(count);
    });

    return answer;
}
