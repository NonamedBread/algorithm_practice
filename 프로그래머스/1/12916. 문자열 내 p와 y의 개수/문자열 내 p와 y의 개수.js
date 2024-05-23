function solution(s){
    let answer = true;
    let pCount = 0;
    let yCount = 0;
    
    stringArr= s.toLowerCase().split('');
    
    for (let i = 0; i < stringArr.length ; i++) {
        if(stringArr[i] === 'p') pCount++;
        if(stringArr[i] === 'y') yCount++;
    }
    
    return pCount === yCount
}