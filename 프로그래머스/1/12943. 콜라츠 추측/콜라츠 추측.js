function solution(num) {
    let count = 0;
    const MAX_COUNT = 500;
    
    while (num !== 1 && count < MAX_COUNT) {
        num = num % 2 === 0 ? num / 2 : num * 3 + 1;
        count++;
    }
    
    return count === MAX_COUNT ? -1 : count;
}

