function solution(arr1, arr2) {
    return arr1.map((row, i) => row.map((num, j) => num + arr2[i][j]));
}