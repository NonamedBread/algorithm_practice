function solution(name, yearning, photo) {
    let answer = [];
    const scoreKey = {}
    for (let i = 0; i < name.length; i++ ){
        scoreKey[name[i]] = yearning[i];
    }
    
    for (let i = 0; i < photo.length; i++ ){
        let temp = 0
        for (let j = 0; j< photo[i].length; j++){
            temp +=  scoreKey[photo[i][j]] ?? 0
        }
        answer.push(temp)
    }
    
    return answer;
}