function solution(n, m) {
    let answer = [];
    let max = Math.max(n,m);
    let min = Math.min(n,m);
    
    const gcdValue = gcd(min, max);
    
    return [gcdValue, min * max / gcdValue]
}

const gcd = (a, b) => {
    while (b !== 0) {
      let r = a % b;
      a = b;
      b = r;
    }
    return a;
}