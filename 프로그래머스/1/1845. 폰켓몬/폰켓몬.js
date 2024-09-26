function solution(nums) {
    const length = nums.length / 2
    const setArrLength = [... new Set(nums)].length
    
    var answer = setArrLength > length ? length : setArrLength
    return answer;
}