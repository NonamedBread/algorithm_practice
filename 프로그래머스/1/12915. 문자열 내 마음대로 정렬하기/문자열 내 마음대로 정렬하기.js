function solution(strings, n) {
    return strings.sort((a, b) => {
        if (a[n] === b[n]) {
            return a.localeCompare(b); // n번째 문자가 같을 경우 사전순 정렬
        }
        return a[n].localeCompare(b[n]);
    });
}
