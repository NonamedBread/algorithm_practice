function solution(sizes) {
    let maxWidth = 0;
    let maxHeight = 0;

    sizes.forEach(([w, h]) => {
        if (w < h) [w, h] = [h, w]; // 가로(w)가 세로(h)보다 항상 크도록 정렬
        if (w > maxWidth) maxWidth = w; // 최대 가로 길이 갱신
        if (h > maxHeight) maxHeight = h; // 최대 세로 길이 갱신
    });

    return maxWidth * maxHeight; // 최소 직사각형 넓이 계산
}