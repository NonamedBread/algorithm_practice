function solution(n) {
    let answer = 0;
    let r = 0;
    let temp = []

    while(n !== 0){
        r = n % 3
        n = Math.floor(n / 3)
        temp.push(r)
    }
    
    for(let i = 0; i < temp.length ; i ++){
        answer += temp[i] * (3 ** (temp.length - i - 1))
    }
    
    return answer;
}