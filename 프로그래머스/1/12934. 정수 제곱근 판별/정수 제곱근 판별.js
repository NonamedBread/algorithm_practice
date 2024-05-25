function solution(n) {
    let answer = 0;
    if (n < 0) answer = -1;
    
    const sqrt = Math.sqrt(n) 
    
    answer = sqrt === Math.floor(sqrt) ? (sqrt+1) ** 2 : -1
    
    return answer;
}