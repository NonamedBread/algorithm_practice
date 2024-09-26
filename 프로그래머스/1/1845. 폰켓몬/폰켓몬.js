function solution(nums) {
    const maxAllowed = nums.length / 2;
    const uniqueCount = new Set(nums).size;

    return Math.min(uniqueCount, maxAllowed);
}