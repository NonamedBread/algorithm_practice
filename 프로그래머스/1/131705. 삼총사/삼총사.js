function solution(number) {
    let answer = 0;
    const numLen = number.length;
    for(let i = 0; i < numLen; i++){
        for(let j = i + 1; j < numLen; j++){
            for(let k = j + 1; k < numLen; k++){
                if(number[i] + number[j] + number[k] === 0) {
                  answer++;
                }
            }
        }
    }
    
    return answer;
}