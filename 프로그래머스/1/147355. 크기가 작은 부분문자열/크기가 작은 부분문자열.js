function solution(t, p) {
    let answer = 0;
    const tLength = t.length
    const pLength = p.length

    for(let i = 0; i <= tLength - pLength; i++){
     let temp = t.substring(i, i + pLength)
     answer += Number(p) < Number(temp) ? 0 : 1;
    }
    
    return answer;
}