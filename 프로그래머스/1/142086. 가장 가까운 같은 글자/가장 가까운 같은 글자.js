function solution(s) {
    let answer = Array.from({ length: s.length }, () => -1);
    let lastSeen = {}; // 각 문자의 마지막 출현 위치를 기록합니다.

    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        if (lastSeen.hasOwnProperty(char)) {
            answer[i] = i - lastSeen[char];
        }
        
        lastSeen[char] = i; // 현재 문자의 위치를 기록합니다.
    }

    return answer;
}
