function solution(array, commands) {
    let answer = [];
    for(let i = 0; i < commands.length ; i++){
        let startIdx = commands[i][0] -1;
        let endIdx = commands[i][1];
        let findIdx = commands[i][2]

        let sliceArr = array.slice(startIdx,endIdx).sort((a,b) => a-b)
        answer.push(sliceArr[findIdx-1])

    }
    
    return answer;
}
