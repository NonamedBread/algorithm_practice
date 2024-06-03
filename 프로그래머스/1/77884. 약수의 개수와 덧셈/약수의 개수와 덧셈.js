function solution(left, right) {
  let answer = 0;
  for(let i = left; i <= right; i++) {
    const sqrt = Math.sqrt(i);
    answer += sqrt === Math.floor(sqrt) ? -i : i;
  }
  return answer;
}