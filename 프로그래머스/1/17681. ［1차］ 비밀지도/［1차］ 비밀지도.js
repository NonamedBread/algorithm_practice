function solution(n, arr1, arr2) {
    let answer = [];
    let binaryArr1 = []
    let binaryArr2 = []

    for(let i = 0 ; i < n ; i++ ){
      let tempArr = ''
      binaryArr1 = binary(n, arr1[i])
      binaryArr2 = binary(n, arr2[i])

      for(let j = 0; j < n; j++){
          tempArr += binaryArr1[j] === '#' || binaryArr2[j] === '#' ? '#' : ' '
      }
      answer.push(tempArr)
    }
   
    return answer;
}

const binary = (len, num) => {
    // 주어진 숫자를 2진수 문자열로 변환
    let binaryStr = num.toString(2).replaceAll('1','#')

    // 변환된 2진수 문자열의 길이가 len보다 짧으면 왼쪽에 0을 추가
    while (binaryStr.length < len) {
        binaryStr = '0' + binaryStr;
    }

    // 이진수 문자열을 배열로 변환
    let binaryArr = Array.from(binaryStr)
    
    return binaryArr;
}